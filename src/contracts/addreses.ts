import { WETH, WSTETH, OP, SNX, WBTC, STONES, TOTEM } from '../utils'

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
        MULTICALL: '0xcA11bde05977b3631167028862bE2a173976CA11',
        ETH: '0x4200000000000000000000000000000000000006',
        GEB_SYSTEM_COIN: '0x791b01f273317a75d33382Ca9e44D286Ee175be3',
        GEB_PROTOCOL_TOKEN: '0x996F113630C946d1fc44c3490864B1cEdf3EA8C8',
        GEB_SAFE_ENGINE: '0x117Bf57765D60f7f97C1bd03BBF636ABC36c6E13',
        GEB_ORACLE_RELAYER: '0xef52D7b9e1cF25838dBfcdbB0Ef981B8368E4673',
        GEB_SURPLUS_AUCTION_HOUSE: '0x450Fd0595bEc27526Cf0B850b424c7F7d42Ee121',
        GEB_DEBT_AUCTION_HOUSE: '0x00261190A0EaeAb575940008428A87cA6a2eAB6e',
        GEB_COLLATERAL_AUCTION_HOUSE_FACTORY: '0x0E1E985EBb705B215be4Ec20fE72d86B729E731c',
        GEB_ACCOUNTING_ENGINE: '0x765736F1B36e8DDf2F220EfE512403308F9AB3DB',
        GEB_LIQUIDATION_ENGINE: '0x73176E031C08220781AA3D182a31215C3BCcc155',
        GEB_COIN_JOIN: '0xB3cebea43Bd0918aFDC57C64cda99fdAeB6CC56a',
        GEB_COLLATERAL_JOIN_FACTORY: '0x3758C1036149468b9418B67a1ee0ea8a0aB30F40',
        GEB_TAX_COLLECTOR: '0x16745793c46B905c08F1dCee362954B4Ef2e78c4',
        GEB_STABILITY_FEE_TREASURY: '0xcCb8Eade63b567FaAb7498abc6150463F196585F',
        GEB_RRFM_CALCULATOR: '0x2b30b94362B265dbBE8dD9a17e971b223baECF1D',
        GEB_RRFM_SETTER: '0x18754Df672C9aFB4cd588d174aBC78f7b8d94475',
        GEB_GLOBAL_SETTLEMENT: '0x850C8d80455c2714F735cc4D504F9dD9241883eC',
        GEB_POST_SETTLEMENT_SURPLUS_AUCTION_HOUSE: '0x979D7aEB7f62f648Df774D43F67184715682ced3',
        GEB_POST_SETTLEMENT_SURPLUS_AUCTIONEER: '0x9550465484cA23d2bE3d54024E6D41f7E491a0Aa',
        SAFE_MANAGER: '0xA5D7B29493944712B21323833A9096177Da8e224',
        PROXY_FACTORY: '0x11eaabfd0f2Ef29C4c6Cd58b4a1FD55676dBAA6E',
        PROXY_BASIC_ACTIONS: '0x52AAd56812BC260925a22d99ae9877dF3f021fA9',
        PROXY_DEBT_AUCTION_ACTIONS: '0x26da52b2000814b44aD0E25148995C9B768951A8',
        PROXY_SURPLUS_AUCTION_ACTIONS: '0x28e4EC79B368D72Ea61e39ad80B73b39aB56186c',
        PROXY_COLLATERAL_AUCTION_ACTIONS: '0xBE87f102430DdeD7d1B87DF1ad6697766a796182',
        PROXY_POST_SETTLEMENT_SURPLUS_AUCTION_ACTIONS: '0xc2Ee25E1E298466B1F8764c39d070C9c60daECBd',
        PROXY_GLOBAL_SETTLEMENT_ACTIONS: '0x850f31Fc74338f8E562f844ce822f75C8cf7C5B0',
        PROXY_REWARDED_ACTIONS: '0xAfc5B1Cdb8cc2f2570C555331b2E07Fc48648E73',
        JOB_ACCOUNTING: '0x3eE1B9d2fE0681E132612BC6C78A317a750f7E7d',
        JOB_LIQUIDATION: '0x6b7dc78AE561Efb7A620079419acAc38d470A153',
        JOB_ORACLES: '0xC554dA40871255AC342aC1463B5b4EB028eb8eB6',
    },
    'optimism-goerli': {
        MULTICALL: '0xcA11bde05977b3631167028862bE2a173976CA11',
        ETH: '0x4200000000000000000000000000000000000006',
        GEB_SYSTEM_COIN: '0xb2d541BDd0037e03d6B43490c9A72594a6c37A0f',
        GEB_PROTOCOL_TOKEN: '0x05CBD1C19Af83Ab7929C8cA5000076cc0D3CeD62',
        GEB_SAFE_ENGINE: '0x8CD47C308BE756F3721D2B25d73D372312fC58e3',
        GEB_ORACLE_RELAYER: '0xC87db8Fc544b9d12c10CA68e0D396598ecECF310',
        GEB_SURPLUS_AUCTION_HOUSE: '0x80e05a7ade7C1D0f82635764C6a90c6473Fc3a9c',
        GEB_DEBT_AUCTION_HOUSE: '0x2b6227a6ee0DD1C51AD849675E688195cE9bB203',
        GEB_COLLATERAL_AUCTION_HOUSE_FACTORY: '0xa4B2f6Cd5287bF04435C9a0Fb7B7aefF71b99eF1',
        GEB_ACCOUNTING_ENGINE: '0xeeD607FC8c614f75B12524e7a04f62B8257fAB33',
        GEB_LIQUIDATION_ENGINE: '0x602F40EC23763994d5a6Dd26b240f4BeC39C7001',
        GEB_COIN_JOIN: '0xf439248215b6668018272bcF4B03E6E172472b52',
        GEB_COLLATERAL_JOIN_FACTORY: '0xFCCdD4B18dD2Ab02D8F0721130195e8C9C394261',
        GEB_TAX_COLLECTOR: '0x4d551Fb5132bfDf04f4e3742b244989A70F6098d',
        GEB_STABILITY_FEE_TREASURY: '0x1411F0833Bc05DA16a959b3De21D5Fb7f1E0881f',
        GEB_RRFM_CALCULATOR: '0xb5559E17879225eAe5001de5Bc998123A1503DA6',
        GEB_RRFM_SETTER: '0x35448044AA20592F10Bef31e4aeD57E5A25B65Fc',
        GEB_GLOBAL_SETTLEMENT: '0xB9C85D0887d210fd39d22fB26EeC87705feA35a6',
        GEB_POST_SETTLEMENT_SURPLUS_AUCTION_HOUSE: '0x1b3D1a8A08d9d675A519E6B2fAbC56E553c90Fb5',
        GEB_POST_SETTLEMENT_SURPLUS_AUCTIONEER: '0xAA36fd0627Ce73a338e60418DB392F3323B88372',
        SAFE_MANAGER: '0xd582Cb7e38503D584E7872B18B5451AbcA2527Ac',
        PROXY_FACTORY: '0xCE03C307d005c26d3Ee83Ff2B5341179df380887',
        PROXY_BASIC_ACTIONS: '0x61C2510325c89D6A244E2b5D84C2a2e66bFd067A',
        PROXY_DEBT_AUCTION_ACTIONS: '0xDeCCaAFEbfCF2C1210ac2d7115E5E043f27071E5',
        PROXY_SURPLUS_AUCTION_ACTIONS: '0xd1E276F8CEC64016e962a2c5B7D7B47aa611004b',
        PROXY_COLLATERAL_AUCTION_ACTIONS: '0x81b52C669ce1751c73C50945d95bbAe27ee8180D',
        PROXY_POST_SETTLEMENT_SURPLUS_AUCTION_ACTIONS: '0x14976A0bF941e9e56779F3F1Ed699865A3AF5Ea5',
        PROXY_GLOBAL_SETTLEMENT_ACTIONS: '0x7ca73B3b9be083f5323804B5054BC4323ab383a3',
        PROXY_REWARDED_ACTIONS: '0xB07204A37722B929198ce22C7b8015e6e7601Da7',
        JOB_ACCOUNTING: '0xCeCc0253fA03786031A4df8DB940728543D01Fb6',
        JOB_LIQUIDATION: '0x1Bea51CDcc5E5713A7b5eca4F1B27D90b3F0ddB5',
        JOB_ORACLES: '0x1F517889F899A3792c4ED0D6Ae8f1A69e89E3d40',
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
    mainnet: {
        WETH: {
            address: '0x4200000000000000000000000000000000000006',
            decimals: 18,
            symbol: 'WETH',
            bytes32String: WETH,
            collateralJoin: '0xDbf42B5Fc7CBDF6A8917dDF72037138077cD25BA',
            collateralAuctionHouse: '0x1A0f6fA7c19271ee4506809D991a1E0e4DCde0b4',
            isCollateral: true,
        },
        WSTETH: {
            address: '0x1F32b1c2345538c0c6f582fCB022739c4A194Ebb',
            decimals: 18,
            symbol: 'WSTETH',
            bytes32String: WSTETH,
            collateralJoin: '0x47EcEe0DAb2B28c1dD926Cdf55451058cfB187Da',
            collateralAuctionHouse: '0xe1B8BD057A731837CF127546826063E92955c2f1',
            isCollateral: true,
        },
        OP: {
            address: '0x4200000000000000000000000000000000000042',
            decimals: 18,
            symbol: 'OP',
            bytes32String: OP,
            collateralJoin: '0xEA976c6F2283696d3F417Fb912b0B6d6b0eeF4A0',
            collateralAuctionHouse: '0x94bbE2108a0B2FBf8777fC63190B6405bea0251e',
            isCollateral: true,
        },
        HAI: {
            address: '0x791b01f273317a75d33382Ca9e44D286Ee175be3',
            decimals: 18,
            symbol: 'HAI',
            bytes32String: '',
            collateralJoin: '0xB3cebea43Bd0918aFDC57C64cda99fdAeB6CC56a',
            collateralAuctionHouse: '',
            isCollateral: false,
        },
        KITE: {
            address: '0x996F113630C946d1fc44c3490864B1cEdf3EA8C8',
            decimals: 18,
            symbol: 'KITE',
            bytes32String: '',
            collateralJoin: '',
            collateralAuctionHouse: '',
            isCollateral: false,
        },
    },
    'optimism-goerli': {
        WETH: {
            address: '0x4200000000000000000000000000000000000006',
            decimals: 18,
            symbol: 'WETH',
            bytes32String: WETH,
            collateralJoin: '0xC0888B3d49073E84A00FE341104FB0756d9142E6',
            collateralAuctionHouse: '0xE3c748B71bc75FA8E188E487f03a0E2741a7cb77',
            isCollateral: true,
        },
        OP: {
            address: '0x4200000000000000000000000000000000000042',
            decimals: 18,
            symbol: 'OP',
            bytes32String: OP,
            collateralJoin: '0xD11e8a5eB973E3b4b613171b5745261fcF83ec7B',
            collateralAuctionHouse: '0xbD2a307BBbd07e9E83BAf61BbB7f88F27B227C8C',
            isCollateral: true,
        },
        /* TODO: uncomment after SNX is deployed through governance
        SNX: {
            address: '0x2E5ED97596a8368EB9E44B1f3F25B2E813845303',
            decimals: 18,
            symbol: 'SNX',
            bytes32String: SNX,
            collateralJoin: '0x1e4Cc1F2250376b5ECe0093da530aee30a40dc8D',
            collateralAuctionHouse: '0x334fBD39f300c80cbe4ABA4B93a9C8eC895f4c35',
            isCollateral: true,
        },
        */
        WBTC: {
            address: '0x72Bf28D2E3dfE44a7dD0BFE265fCc381fF8A74C8',
            decimals: 8,
            symbol: 'WBTC',
            bytes32String: WBTC,
            collateralJoin: '0x4A025ac49E92e8fC62871E56129b90612a7D8647',
            collateralAuctionHouse: '0xb5aFbD1f748F22D4EaC9e7F43c709942eE6F0500',
            isCollateral: true,
        },
        STN: {
            address: '0x41944Bebe7Bfd3C708DBf96F4eE2d0c3b91843CA',
            decimals: 3,
            symbol: 'STN',
            bytes32String: STONES,
            collateralJoin: '0xa192df7b5e9e67731b2dc2793749B36ef1f254fc',
            collateralAuctionHouse: '0x37941361EA0769823811a2D95aA59158277Bc82A',
            isCollateral: true,
        },
        TTM: {
            address: '0xdCfd86628e5e5eC7f7c1d8Ae9894E57dDF86c1f1',
            decimals: 0,
            symbol: 'TTM',
            bytes32String: TOTEM,
            collateralJoin: '0x93667E2b8437a747604caC0e3716605C8a37BAa8',
            collateralAuctionHouse: '0xeb3AfaE71446FBac3d97F572cE56475Cbd5a33Bc',
            isCollateral: true,
        },
        HAI: {
            address: '0xb2d541BDd0037e03d6B43490c9A72594a6c37A0f',
            decimals: 18,
            symbol: 'HAI',
            bytes32String: '',
            collateralJoin: '0xf439248215b6668018272bcF4B03E6E172472b52',
            collateralAuctionHouse: '',
            isCollateral: false,
        },
        KITE: {
            address: '0x05CBD1C19Af83Ab7929C8cA5000076cc0D3CeD62',
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
