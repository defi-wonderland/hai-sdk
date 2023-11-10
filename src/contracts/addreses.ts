import { WETH, OP, SNX, WBTC, STONES, TOTEM } from '../utils'

// All keys are mandatory
export type ContractKey =
    | 'MULTICALL'
    | 'ETH'
    | 'GEB_SYSTEM_COIN'
    | 'GEB_PROTOCOL_TOKEN'
    | 'GEB_SAFE_ENGINE'
    | 'GEB_ORACLE_RELAYER'
    | 'GEB_SURPLUS_AUCTION_HOUSE'
    | 'GEB_DEBT_AUCTION_HOUSE'
    | 'GEB_COLLATERAL_AUCTION_HOUSE_FACTORY'
    | 'GEB_ACCOUNTING_ENGINE'
    | 'GEB_LIQUIDATION_ENGINE'
    | 'GEB_COIN_JOIN'
    | 'GEB_COLLATERAL_JOIN_FACTORY'
    | 'GEB_TAX_COLLECTOR'
    | 'GEB_STABILITY_FEE_TREASURY'
    | 'GEB_GLOBAL_SETTLEMENT'
    | 'GEB_POST_SETTLEMENT_SURPLUS_AUCTION_HOUSE'
    | 'GEB_POST_SETTLEMENT_SURPLUS_AUCTIONEER'
    | 'GEB_RRFM_SETTER'
    | 'GEB_RRFM_CALCULATOR'
    | 'SAFE_MANAGER'
    | 'PROXY_FACTORY'
    | 'PROXY_BASIC_ACTIONS'
    | 'PROXY_DEBT_AUCTION_ACTIONS'
    | 'PROXY_SURPLUS_AUCTION_ACTIONS'
    | 'PROXY_COLLATERAL_AUCTION_ACTIONS'
    | 'PROXY_POST_SETTLEMENT_SURPLUS_AUCTION_ACTIONS'
    | 'PROXY_GLOBAL_SETTLEMENT_ACTIONS'
    | 'PROXY_REWARDED_ACTIONS'
    | 'JOB_ACCOUNTING'
    | 'JOB_LIQUIDATION'
    | 'JOB_ORACLES'

export type ContractList = {
    [key in ContractKey]: string
}

export declare type GebDeployment = 'mainnet' | 'optimism-goerli'

const addresses: Record<GebDeployment, ContractList> = {
    mainnet: {
        MULTICALL: '0x0000000000000000000000000000000000000000',
        ETH: '0x0000000000000000000000000000000000000000',
        GEB_SYSTEM_COIN: '0x0000000000000000000000000000000000000000',
        GEB_PROTOCOL_TOKEN: '0x0000000000000000000000000000000000000000',
        GEB_SAFE_ENGINE: '0x0000000000000000000000000000000000000000',
        GEB_ORACLE_RELAYER: '0x0000000000000000000000000000000000000000',
        GEB_SURPLUS_AUCTION_HOUSE: '0x0000000000000000000000000000000000000000',
        GEB_DEBT_AUCTION_HOUSE: '0x0000000000000000000000000000000000000000',
        GEB_COLLATERAL_AUCTION_HOUSE_FACTORY: '0x0000000000000000000000000000000000000000',
        GEB_ACCOUNTING_ENGINE: '0x0000000000000000000000000000000000000000',
        GEB_LIQUIDATION_ENGINE: '0x0000000000000000000000000000000000000000',
        GEB_COIN_JOIN: '0x0000000000000000000000000000000000000000',
        GEB_COLLATERAL_JOIN_FACTORY: '0x0000000000000000000000000000000000000000',
        GEB_TAX_COLLECTOR: '0x0000000000000000000000000000000000000000',
        GEB_STABILITY_FEE_TREASURY: '0x0000000000000000000000000000000000000000',
        GEB_RRFM_CALCULATOR: '0x0000000000000000000000000000000000000000',
        GEB_RRFM_SETTER: '0x0000000000000000000000000000000000000000',
        GEB_GLOBAL_SETTLEMENT: '0x0000000000000000000000000000000000000000',
        GEB_POST_SETTLEMENT_SURPLUS_AUCTION_HOUSE: '0x0000000000000000000000000000000000000000',
        GEB_POST_SETTLEMENT_SURPLUS_AUCTIONEER: '0x0000000000000000000000000000000000000000',
        SAFE_MANAGER: '0x0000000000000000000000000000000000000000',
        PROXY_FACTORY: '0x0000000000000000000000000000000000000000',
        PROXY_BASIC_ACTIONS: '0x0000000000000000000000000000000000000000',
        PROXY_DEBT_AUCTION_ACTIONS: '0x0000000000000000000000000000000000000000',
        PROXY_SURPLUS_AUCTION_ACTIONS: '0x0000000000000000000000000000000000000000',
        PROXY_COLLATERAL_AUCTION_ACTIONS: '0x0000000000000000000000000000000000000000',
        PROXY_POST_SETTLEMENT_SURPLUS_AUCTION_ACTIONS: '0x0000000000000000000000000000000000000000',
        PROXY_GLOBAL_SETTLEMENT_ACTIONS: '0x0000000000000000000000000000000000000000',
        PROXY_REWARDED_ACTIONS: '0x0000000000000000000000000000000000000000',
        JOB_ACCOUNTING: '0x0000000000000000000000000000000000000000',
        JOB_LIQUIDATION: '0x0000000000000000000000000000000000000000',
        JOB_ORACLES: '0x0000000000000000000000000000000000000000',
    },
    'optimism-goerli': {
        MULTICALL: '0xcA11bde05977b3631167028862bE2a173976CA11',
        ETH: '0x4200000000000000000000000000000000000006',
        GEB_SYSTEM_COIN: '0x4129B98702f37fAb59dB50aAd62a999168347Fbc',
        GEB_PROTOCOL_TOKEN: '0xF80e5C28f40a2B87552f38e669037fF2E4CC3BC8',
        GEB_SAFE_ENGINE: '0xcE023b4b33A68Ea1CCF3Ade59bE61BEACe7dFc5E',
        GEB_ORACLE_RELAYER: '0x239B5740F940eecc48F28B42527260E3B037E095',
        GEB_SURPLUS_AUCTION_HOUSE: '0x6d78d25c46Df83F5e97d5F60AEe0808b61eC32d4',
        GEB_DEBT_AUCTION_HOUSE: '0xFd61967AdB177183565157E089EAbFF2022b798c',
        GEB_COLLATERAL_AUCTION_HOUSE_FACTORY: '0x02CdbCE203716184ffC16Df7867c82ac4856D876',
        GEB_ACCOUNTING_ENGINE: '0x1E635F73C86afCE6739be649b32E98167F7C637E',
        GEB_LIQUIDATION_ENGINE: '0x2fE95ABb6884aa3B668Cd49370395578183340d7',
        GEB_COIN_JOIN: '0xfF64cEB1E112BbDFA509ef2C10D488b80344cEE4',
        GEB_COLLATERAL_JOIN_FACTORY: '0x60b86579489cBc1CE03DB2c73A637c372867ba5d',
        GEB_TAX_COLLECTOR: '0x24224464D10d9dF1De0808d7AD89010c8Aa083a8',
        GEB_STABILITY_FEE_TREASURY: '0xF04eB0073aF2163f0205b5f63b7a3074204E11a5',
        GEB_RRFM_CALCULATOR: '0xEb88eaE46F7565492F9C02de673f178F4C938d5e',
        GEB_RRFM_SETTER: '0xCF3a983709135c015119F19D4C9D8fa2e01beA7a',
        GEB_GLOBAL_SETTLEMENT: '0x741caC63B592877A59060106dc0AE314Ab5dE39C',
        GEB_POST_SETTLEMENT_SURPLUS_AUCTION_HOUSE: '0xcf10549146c7911096d439acc06577B450DA0166',
        GEB_POST_SETTLEMENT_SURPLUS_AUCTIONEER: '0xFbc9015097D169CfC144F8a5372Ea7F629132aF5',
        SAFE_MANAGER: '0xb6eE766107F925858ae5463032e7090b01ee3923',
        PROXY_FACTORY: '0x002736E8c9ddAE567d0f74B97Ab7Ed57e5fC2A7D',
        PROXY_BASIC_ACTIONS: '0x0Aa292e736EFBEe2162E51353fd63a3619da65B7',
        PROXY_DEBT_AUCTION_ACTIONS: '0xBF3cAA3CD63e620033688E7c29D6c388770eCa38',
        PROXY_SURPLUS_AUCTION_ACTIONS: '0xae191da52ab73433Fd660660CdeccCD212a1039a',
        PROXY_COLLATERAL_AUCTION_ACTIONS: '0xc3CEBa0AB5d434E7f5977c738d75750829060AC0',
        PROXY_POST_SETTLEMENT_SURPLUS_AUCTION_ACTIONS: '0xb259b5e970eBf5ae5222d359Ece043554a56B88d',
        PROXY_GLOBAL_SETTLEMENT_ACTIONS: '0x05014B40A6fa30Fa8eeDE4a0960A130c27361396',
        PROXY_REWARDED_ACTIONS: '0x1DD48620bE7EdACE42F545c342BfC7a9c8F096C2',
        JOB_ACCOUNTING: '0xd4766F563EB5030Eb7df9F60C4837e586ab50c69',
        JOB_LIQUIDATION: '0x66690C4Cc0f6965326C21A927557b41095f4B0bA',
        JOB_ORACLES: '0x8f00a02e57FE88bBE026201Ca402EF50A7c718ED',
    },
}

export type TokenData = {
    address: string
    decimals: number
    symbol: string
    bytes32String: string
    collateralJoin: string
    collateralAuctionHouse: string
    isCollateral: boolean
}

export type TokenList = {
    [key: string]: TokenData
}

const tokens: Record<GebDeployment, TokenList> = {
    mainnet: {},
    'optimism-goerli': {
        WETH: {
            address: '0x4200000000000000000000000000000000000006',
            decimals: 18,
            symbol: 'WETH',
            bytes32String: WETH,
            collateralJoin: '0x5bEE84198637Eef6a59E2c34882cAB533d2173E6',
            collateralAuctionHouse: '0xACc4903FD699a18cA4eCcD176DD2a1F8c1Ab8d94',
            isCollateral: true,
        },
        OP: {
            address: '0x4200000000000000000000000000000000000042',
            decimals: 18,
            symbol: 'OP',
            bytes32String: OP,
            collateralJoin: '0x8ff79DdF6A9D2AF8d6289F5f4F33957736e953Ea',
            collateralAuctionHouse: '0x6A14BC50e46372ea4758290276e892fAc513B088',
            isCollateral: true,
        },
        SNX: {
            address: '0x2E5ED97596a8368EB9E44B1f3F25B2E813845303',
            decimals: 18,
            symbol: 'SNX',
            bytes32String: SNX,
            collateralJoin: '0x1e4Cc1F2250376b5ECe0093da530aee30a40dc8D',
            collateralAuctionHouse: '0x334fBD39f300c80cbe4ABA4B93a9C8eC895f4c35',
            isCollateral: true,
        },
        WBTC: {
            address: '0x7715e2eFc92EfDB8C11894C1dDEAe75B2d81cD9b',
            decimals: 8,
            symbol: 'WBTC',
            bytes32String: WBTC,
            collateralJoin: '0xd08cF6eAdFD9706C7cfC6296Fa92E6899EeBb691',
            collateralAuctionHouse: '0xB1b583Af141342B34339b76D5fA1b237E1343633',
            isCollateral: true,
        },
        STN: {
            address: '0xBDE81AA5E8A652cdA8CBC0e742cCf3c83020ce03',
            decimals: 3,
            symbol: 'STN',
            bytes32String: STONES,
            collateralJoin: '0x95B02b951af9449f28D842D2c9896af54555Fdb6',
            collateralAuctionHouse: '0xc50114BfCCc56B6D6611813896975f1D683720e5',
            isCollateral: true,
        },
        TTM: {
            address: '0xFd33d83B2B49b7a0649E7e139fF2Abe512d0205D',
            decimals: 0,
            symbol: 'TTM',
            bytes32String: TOTEM,
            collateralJoin: '0xbBc0f941D637896644dfeB5F6846Ae71B405720c',
            collateralAuctionHouse: '0xd40Fd7400Ee5B141E42d920dCfa93CDd9a8c0CF5',
            isCollateral: true,
        },
        HAI: {
            address: '0x4129B98702f37fAb59dB50aAd62a999168347Fbc',
            decimals: 18,
            symbol: 'HAI',
            bytes32String: '',
            collateralJoin: '0xfF64cEB1E112BbDFA509ef2C10D488b80344cEE4',
            collateralAuctionHouse: '',
            isCollateral: false,
        },
        KITE: {
            address: '0xF80e5C28f40a2B87552f38e669037fF2E4CC3BC8',
            decimals: 18,
            symbol: 'KITE',
            bytes32String: '',
            collateralJoin: '',
            collateralAuctionHouse: '',
            isCollateral: false,
        },
    },
}

export const getTokenList = (network: GebDeployment): TokenList => {
    return tokens[network]
}

export const getAddressList = (network: GebDeployment): ContractList => {
    return addresses[network]
}
