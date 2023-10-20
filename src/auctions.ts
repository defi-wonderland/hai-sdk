import { BigNumber } from 'ethers'
import { ContractApis } from './api/contract-apis'
import {
    IDebtAuction,
    ISurplusAuction,
    IAuctionBidder,
    bidEventToBid,
    collateralBidEventToBid,
    collateralStartAuctionEventToAuction,
    debtStartAuctionEventToAuction,
    surplusStartAuctionEventToAuction,
    ICollateralAuction,
} from './schema/auction'
import {
    IncreaseBidSizeEventFilter as SurplusIncreaseBidSizeEventFilter,
    RestartAuctionEventFilter as SurplusRestartAuctonEventFilter,
    SettleAuctionEventFilter as SurplusSettleAuctionEventFilter,
    StartAuctionEventFilter as SurplusStartAuctionEventFilter,
} from './typechained/ISurplusAuctionHouse'

import {
    DecreaseSoldAmountEventFilter as DebtDecreaseSoldAmountEventFilter,
    RestartAuctionEventFilter as DebtRestartAuctonEventFilter,
    SettleAuctionEventFilter as DebtSettleAuctionEventFilter,
    StartAuctionEventFilter as DebtStartAuctionEventFilter,
} from './typechained/IDebtAuctionHouse'

/**
 * The main package used to interact with the GEB system. Includes [[deployProxy |helper functions]] for safe
 *  management and the [[contracts | contract interface object]] to directly call smart contracts.
 */
export class Auctions {
    protected surplusStartAuctionFilter: SurplusStartAuctionEventFilter
    protected surplusBidFilter: SurplusIncreaseBidSizeEventFilter
    protected surplusRestartAuctionFilter: SurplusRestartAuctonEventFilter
    protected surplusSettleAuctionFilter: SurplusSettleAuctionEventFilter

    protected debtStartAuctionFilter: DebtStartAuctionEventFilter
    protected debtDecreaseSoldAmountFilter: DebtDecreaseSoldAmountEventFilter
    protected debtRestartAuctionFilter: DebtRestartAuctonEventFilter
    protected debtSettleAuctionFilter: DebtSettleAuctionEventFilter

    /**
     * Constructor for the main Geb.js object.
     * @param  {GebDeployment} network Either `'kovan'`, `'mainnet'` or an actual list of contract addresses.
     * @param  {GebProviderInterface|ethers.providers.Provider} provider Either a Ethers.js provider or a Geb provider (support for Web3 will be added in the future)
     */
    constructor(public contracts: ContractApis) {
        // Surplus Auctions
        this.surplusStartAuctionFilter = this.contracts.surplusAuctionHouse.filters.StartAuction()
        this.surplusBidFilter = this.contracts.surplusAuctionHouse.filters.IncreaseBidSize()
        this.surplusRestartAuctionFilter = this.contracts.surplusAuctionHouse.filters.RestartAuction()
        this.surplusSettleAuctionFilter = this.contracts.surplusAuctionHouse.filters.SettleAuction()

        // Debt Auctions
        this.debtStartAuctionFilter = this.contracts.debtAuctionHouse.filters.StartAuction()
        this.debtDecreaseSoldAmountFilter = this.contracts.debtAuctionHouse.filters.DecreaseSoldAmount()
        this.debtRestartAuctionFilter = this.contracts.debtAuctionHouse.filters.RestartAuction()
        this.debtSettleAuctionFilter = this.contracts.debtAuctionHouse.filters.SettleAuction()
    }

    public getSurplusAuctions(fromBlock: number, toBlock?: number): Promise<{ auctions: ISurplusAuction[] }> {
        const startAuctionEvents = this.contracts.surplusAuctionHouse.queryFilter(
            this.surplusStartAuctionFilter,
            fromBlock,
            toBlock
        )
        const bidFilterEvents = this.contracts.surplusAuctionHouse.queryFilter(
            this.surplusBidFilter,
            fromBlock,
            toBlock
        )
        const restartAuctionEvents = this.contracts.surplusAuctionHouse.queryFilter(
            this.surplusRestartAuctionFilter,
            fromBlock,
            toBlock
        )
        const settledAuctionEvents = this.contracts.surplusAuctionHouse.queryFilter(
            this.surplusSettleAuctionFilter,
            fromBlock,
            toBlock
        )

        return Promise.all([startAuctionEvents, bidFilterEvents, restartAuctionEvents, settledAuctionEvents]).then(
            ([startAuction, bidEvents, restartAuctions, settledAuctions]) => {
                const bids = bidEvents.reduce((accum: { [key: string]: IAuctionBidder[] }, bid) => {
                    const parsedBid = bidEventToBid(bid)
                    const id = bid.args._id.toString()
                    const bidsForId = accum[id]
                    return { ...accum, [id]: bidsForId ? bidsForId.concat(parsedBid) : [parsedBid] }
                }, {})

                const restarts = restartAuctions.reduce((accum: { [key: string]: BigNumber }, restart) => {
                    const id = restart.args._id.toString()
                    const lastRestart = accum[id]
                    const newRestart = restart.args._auctionDeadline // Do events always come ordered correctly?
                    return { ...accum, [id]: !lastRestart || newRestart.gt(lastRestart) ? newRestart : lastRestart }
                }, {})

                const settled = settledAuctions.reduce((accum: { [key: string]: boolean }, settled) => {
                    const id = settled.args._id.toString()
                    return { ...accum, [id]: true }
                }, {})

                const auctions = startAuction.map((auc) =>
                    surplusStartAuctionEventToAuction(auc, bids, restarts, settled)
                )

                return { auctions }
            }
        )
    }

    public getDebtAuctions(fromBlock: number, toBlock?: number): Promise<{ auctions: IDebtAuction[] }> {
        const startAuctionEvents = this.contracts.debtAuctionHouse.queryFilter(
            this.debtStartAuctionFilter,
            fromBlock,
            toBlock
        )
        const bidFilterEvents = this.contracts.debtAuctionHouse.queryFilter(
            this.debtDecreaseSoldAmountFilter,
            fromBlock,
            toBlock
        )
        const restartAuctionEvents = this.contracts.debtAuctionHouse.queryFilter(
            this.debtRestartAuctionFilter,
            fromBlock,
            toBlock
        )
        const settledAuctionEvents = this.contracts.debtAuctionHouse.queryFilter(
            this.debtSettleAuctionFilter,
            fromBlock,
            toBlock
        )

        return Promise.all([startAuctionEvents, bidFilterEvents, restartAuctionEvents, settledAuctionEvents]).then(
            ([startAuction, bidEvents, restartAuctions, settledAuctions]) => {
                const bids = bidEvents.reduce((accum: { [key: string]: IAuctionBidder[] }, bid) => {
                    const parsedBid = bidEventToBid(bid)
                    const id = bid.args._id.toString()
                    const bidsForId = accum[id]
                    return { ...accum, [id]: bidsForId ? bidsForId.concat(parsedBid) : [parsedBid] }
                }, {})

                const restarts = restartAuctions.reduce((accum: { [key: string]: BigNumber }, restart) => {
                    const id = restart.args._id.toString()
                    const lastRestart = accum[id]
                    const newRestart = restart.args._auctionDeadline // Do events always come ordered correctly?
                    return { ...accum, [id]: !lastRestart || newRestart.gt(lastRestart) ? newRestart : lastRestart }
                }, {})

                const settled = settledAuctions.reduce((accum: { [key: string]: boolean }, settled) => {
                    const id = settled.args._id.toString()
                    return { ...accum, [id]: true }
                }, {})

                const auctions = startAuction.map((auc) => debtStartAuctionEventToAuction(auc, bids, restarts, settled))

                return { auctions }
            }
        )
    }

    public getCollateralAuctions(
        collateral: string,
        fromBlock: number,
        toBlock?: number
    ): Promise<{ auctions: ICollateralAuction[] }> {
        const collateralAuctionHouse = this.contracts.tokenCollateralAuctionHouse[collateral]
        const startFilter = collateralAuctionHouse.filters.StartAuction()
        const buyCollateralFilter = collateralAuctionHouse.filters.BuyCollateral()
        const settleAuctionFilter = collateralAuctionHouse.filters.SettleAuction()

        return Promise.all([
            collateralAuctionHouse.queryFilter(startFilter, fromBlock, toBlock),
            collateralAuctionHouse.queryFilter(buyCollateralFilter, fromBlock, toBlock),
            collateralAuctionHouse.queryFilter(settleAuctionFilter, fromBlock, toBlock),
        ]).then(([startAuction, buyEvents, settleEvents]) => {
            const bids = buyEvents.reduce((accum: { [key: string]: IAuctionBidder[] }, bid) => {
                const parsedBid = collateralBidEventToBid(bid)
                const id = bid.args._id.toString()
                const bidsForId = accum[id]
                return { ...accum, [id]: bidsForId ? bidsForId.concat(parsedBid) : [parsedBid] }
            }, {})

            const settled = settleEvents.reduce((accum: { [key: string]: boolean }, settled) => {
                const id = settled.args._id.toString()
                return { ...accum, [id]: true }
            }, {})

            const auctions = startAuction.map((auc) => collateralStartAuctionEventToAuction(auc, bids, settled))

            return { auctions }
        })
    }
}
