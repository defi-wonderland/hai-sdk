import { WETH, OP } from '../utils'

// All keys are mandatory
export type ContractKey =
    | 'ETH_FROM'
    | 'STARTING_BLOCK_NUMBER'
    | 'PROXY_DEPLOYER'
    | 'COIN_TYPE'
    | 'GOVERNANCE_TYPE'
    | 'MULTICALL'
    | 'FAUCET'
    | 'GEB_MULTISIG'
    | 'GEB_DEPLOY'
    | 'GEB_PROT'
    | 'GEB_SAFE_ENGINE'
    | 'GEB_TAX_COLLECTOR'
    | 'GEB_LIQUIDATION_ENGINE'
    | 'GEB_ACCOUNTING_ENGINE'
    | 'GEB_COIN_JOIN'
    | 'GEB_SURPLUS_AUCTION_HOUSE'
    | 'GEB_DEBT_AUCTION_HOUSE'
    | 'GEB_ORACLE_RELAYER'
    | 'GEB_GLOBAL_SETTLEMENT'
    | 'GEB_STABILITY_FEE_TREASURY'
    | 'BASIC_ACTIONS'
    | 'PROXY_ACTIONS_GLOBAL_SETTLEMENT'
    | 'SAFE_MANAGER'
    | 'PROXY_FACTORY'
    | 'PROXY_REGISTRY'
    | 'ETH'
    | 'MEDIANIZER_ETH'
    // | 'MEDIANIZER_OP'
    | 'PROXY_DEPLOYER'
    | 'GEB_RRFM_SETTER'
    | 'GEB_RRFM_SETTER_RELAYER'
    | 'MEDIANIZER_RAI'
    | 'GEB_RRFM_CALCULATOR'
    | 'GEB_DUMMY_RRFM_CALCULATOR'
    | 'SPOT_RAI'
    | 'PROXY_DEBT_AUCTION_ACTIONS'
    | 'PROXY_SURPLUS_AUCTION_ACTIONS'

export type ContractList = {
    [key in ContractKey]: string
}

export declare type GebDeployment = 'mainnet' | 'optimism-goerli'

const addresses: Record<GebDeployment, ContractList> = {
    mainnet: {
        ETH_FROM: '0x7FAfc11677649DB6AbFEC127B4B776D585520ae1',
        STARTING_BLOCK_NUMBER: '11848304',
        PROXY_DEPLOYER: '0x631e38D6Dc0F4A26F6BE0d3d0E4ebA3d02033aB4',
        COIN_TYPE: 'INDEX',
        GOVERNANCE_TYPE: 'MULTISIG-SAFE',
        MULTICALL: '0x51812e07497586ce025D798Bb44b6d11bBEe3a01',
        FAUCET: '0x0000000000000000000000000000000000000000',
        GEB_MULTISIG: '0x427A277eA53e25143B3b509C684aA4D0EB8bA01b',
        GEB_DEPLOY: '0x24AcC85528e6dd5B9C297fb8821522D36B1Ae09f',
        GEB_PROT: '0x6243d8CEA23066d098a15582d81a598b4e8391F4',
        GEB_SAFE_ENGINE: '0xCC88a9d330da1133Df3A7bD823B95e52511A6962',
        GEB_TAX_COLLECTOR: '0xcDB05aEda142a1B0D6044C09C64e4226c1a281EB',
        GEB_LIQUIDATION_ENGINE: '0x4fFbAA89d648079Faafc7852dE49EA1dc92f9976',
        GEB_ACCOUNTING_ENGINE: '0xcEe6Aa1aB47d0Fb0f24f51A3072EC16E20F90fcE',
        GEB_COIN_JOIN: '0x0A5653CCa4DB1B6E265F47CAf6969e64f1CFdC45',
        GEB_SURPLUS_AUCTION_HOUSE: '0x4EEfDaE928ca97817302242a851f317Be1B85C90',
        GEB_DEBT_AUCTION_HOUSE: '0x1896adBE708bF91158748B3F33738Ba497A69e8f',
        GEB_ORACLE_RELAYER: '0x4ed9C0dCa0479bC64d8f4EB3007126D5791f7851',
        GEB_GLOBAL_SETTLEMENT: '0xee4cf96e5359d9619197fd82b6ef2a9eae7b91e1',
        GEB_STABILITY_FEE_TREASURY:
            '0x83533fdd3285f48204215E9CF38C785371258E76',
        GEB_RRFM_CALCULATOR: '0x5CC4878eA3E6323FdA34b3D28551E1543DEe54C6',
        GEB_DUMMY_RRFM_CALCULATOR: '0x9F02ddBFb4B045Df83D45c4d644027FBD7d72A6D',
        GEB_RRFM_SETTER: '0x7acfc14dbf2decd1c9213db32ae7784626daeb48',
        GEB_RRFM_SETTER_RELAYER: '0xd52da90c20c4610fef8faade2a1281ffa54eb6fb',
        BASIC_ACTIONS: '0xd4878FAf0452659D8202a6E6b1f04F104477b0b7',
        PROXY_ACTIONS_GLOBAL_SETTLEMENT:
            '0x17b5d9914194a08c7Ef14451BA15E8aE4f92Cb93',
        PROXY_DEBT_AUCTION_ACTIONS:
            '0x943C6Bb9FD652f6e4a9dA32894075e5aBECAd394',
        PROXY_SURPLUS_AUCTION_ACTIONS:
            '0x16B0BF0Bf031A3691f4bD600e5340fEDd149C0ED',
        SAFE_MANAGER: '0xEfe0B4cA532769a3AE758fD82E1426a03A94F185',
        PROXY_FACTORY: '0xA26e15C895EFc0616177B7c1e7270A4C7D51C997',
        PROXY_REGISTRY: '0x4678f0a6958e4D2Bc4F1BAF7Bc52E8F3564f3fE4',
        MEDIANIZER_RAI: '0xFbF4849a06F6e6F53EcB31D2f8BD61aA7874b268',
        SPOT_RAI: '0x7235a0094eD56eB2Bd0de168d307C8990233645f',
        ETH: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
        MEDIANIZER_ETH: '0xb825e25856bD98b3f2FAF2aEb6Cb8742B38C4025',
    },
    'optimism-goerli': {
        ETH_FROM: '0x0000000000000000000000000000000000000100',
        STARTING_BLOCK_NUMBER: '23275958',
        PROXY_DEPLOYER: '0x0000000000000000000000000000000000000101',
        COIN_TYPE: 'INDEX',
        GOVERNANCE_TYPE: 'MULTISIG-SAFE',
        MULTICALL: '0xcA11bde05977b3631167028862bE2a173976CA11',
        FAUCET: '0x0000000000000000000000000000000000000000',
        GEB_MULTISIG: '0x0000000000000000000000000000000000000103',
        GEB_DEPLOY: '0x0000000000000000000000000000000000000105',
        GEB_PROT: '0x64ff820bbD2947B2f2D4355D4852F17eb0156D9A',
        GEB_SAFE_ENGINE: '0xDfd2D62b3eC9BF6F52547c570B5AC2136D9756E4',
        GEB_TAX_COLLECTOR: '0x1A88AB748C17E62CD99a2b7162EA0dD8AB7A059A',
        GEB_LIQUIDATION_ENGINE: '0x389b9Eb0cDEAedf96d0dF8e4caA72b5cA5672870',
        GEB_ACCOUNTING_ENGINE: '0xc922644df8E6336c6DFc997e29602EF4aba51c8c',
        GEB_COIN_JOIN: '0x3217B0aBcaAC50898F4826f0C502dEd9AB8eae53',
        GEB_SURPLUS_AUCTION_HOUSE: '0xa65394B23d7c6C2B3aBe9B9ed69a527E2026f855',
        GEB_DEBT_AUCTION_HOUSE: '0x8F7cFe960F12710B1Fe1F3ef4352D3530209598A',
        GEB_ORACLE_RELAYER: '0xca53F197A4A3C72F9954e34906DFC59148Ce653f',
        GEB_GLOBAL_SETTLEMENT: '0xFd4fB8e5f11A3FD403761a832bC35F31d5579B83',
        GEB_STABILITY_FEE_TREASURY:
            '0xFAD4f858867D7aB4Bd7b80c611287abF4B139986',
        GEB_RRFM_CALCULATOR: '0x0000000000000000000000000000000000000114',
        GEB_DUMMY_RRFM_CALCULATOR: '0x0000000000000000000000000000000000000115',
        GEB_RRFM_SETTER: '0x0000000000000000000000000000000000000116',
        GEB_RRFM_SETTER_RELAYER: '0x0000000000000000000000000000000000000117',
        BASIC_ACTIONS: '0x8887EA9Aa9cb522bb3b5b1d1192238403501CeB4',
        PROXY_ACTIONS_GLOBAL_SETTLEMENT:
            '0x0000000000000000000000000000000000000000',
        PROXY_DEBT_AUCTION_ACTIONS:
            '0x0000000000000000000000000000000000000121',
        PROXY_SURPLUS_AUCTION_ACTIONS:
            '0x0000000000000000000000000000000000000122',
        SAFE_MANAGER: '0x5325A56148f67b26FaBDc7EbB30686120a98736c',
        PROXY_FACTORY: '0xC832Ea7C08c381b1F4726894684F7Bf1538E1dEa',
        PROXY_REGISTRY: '0x558Cd657b65b7DFb6B4c65d55F17247810b9C12a',
        MEDIANIZER_RAI: '0x0000000000000000000000000000000000000420',
        SPOT_RAI: '0x0000000000000000000000000000000000000127',
        ETH: '0x4200000000000000000000000000000000000006',
        MEDIANIZER_ETH: '0x74558a1470c714BB5E24a6ba998905Ee5F3F0A25',
    },
}

export type TokenData = {
    address: string
    decimals: number
    symbol: string
    bytes32String: string
    collateralJoin: string
    collateralActionHouse: string
    isCollateral: boolean
}

export type TokenList = {
    [key: string]: TokenData
}

const tokens: Record<GebDeployment, TokenList> = {
    mainnet: {
        WETH: {
            address: '0x0000000000000000000000000000000000000000',
            decimals: 18,
            symbol: 'WETH',
            bytes32String: WETH,
            collateralJoin: '0x0000000000000000000000000000000000000000',
            collateralActionHouse: '0x0000000000000000000000000000000000000000',
            isCollateral: true,
        },
        OP: {
            address: '0x0000000000000000000000000000000000000000',
            decimals: 18,
            symbol: 'OP',
            bytes32String: OP,
            collateralJoin: '0x0000000000000000000000000000000000000000',
            collateralActionHouse: '0x0000000000000000000000000000000000000000',
            isCollateral: false,
        },
        HAI: {
            address: '0x0000000000000000000000000000000000000000',
            decimals: 18,
            symbol: 'HAI',
            bytes32String: '',
            collateralJoin: '0x0000000000000000000000000000000000000000',
            collateralActionHouse: '0x0000000000000000000000000000000000000000',
            isCollateral: false,
        },
    },
    'optimism-goerli': {
        WETH: {
            address: '0x4200000000000000000000000000000000000006',
            decimals: 18,
            symbol: 'WETH',
            bytes32String: WETH,
            collateralJoin: '0x69DE387041C3056ec96aEFb432A546EAe4394da6',
            collateralActionHouse: '0x80D7ED55d9f7623a21580adb6e4442C982Cb51aF',
            isCollateral: true,
        },
        OP: {
            address: '0x4200000000000000000000000000000000000042',
            decimals: 18,
            symbol: 'OP',
            bytes32String: OP,
            collateralJoin: '0xA59A8a069284e52B8c761d7e0AC2129733ACCBF6',
            collateralActionHouse: '0x8C2Be56f48802c2E4B98a5a02ffD1BAC0925e213',
            isCollateral: true,
        },
        HAI: {
            address: '0xEaE90F3b07fBE00921173298FF04f416398f7101',
            decimals: 18,
            symbol: 'HAI',
            bytes32String: '',
            collateralJoin: '0x3217B0aBcaAC50898F4826f0C502dEd9AB8eae53',
            collateralActionHouse: '0x0000000000000000000000000000000000000000',
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
