const configsMap: { [environment: string]: EnvironmentConfigs } = {};

export interface EnvironmentConfigs {
  resourceUrl: string;
  axelarRpcUrl: string;
  axelarLcdUrl: string;
  axelarGMPApiUrl: string;
  axelarscanBaseApiUrl: string;
  depositServiceUrl: string;
  recoveryApiUrl: string;
  axelarCrosschainApiUrl: string;
  axelarscanUrl: string;
  wssStatus: string;
}

const localConfigs: EnvironmentConfigs = {
  resourceUrl: "http://localhost:4000",
  axelarRpcUrl: "https://axelar-testnet-rpc.axelar-dev.workers.dev",
  axelarLcdUrl: "https://axelar-testnet-lcd.axelar-dev.workers.dev",
  axelarGMPApiUrl: "https://testnet.api.gmp.axelarscan.io",
  axelarscanBaseApiUrl: "",
  depositServiceUrl: "https://deposit-service-devnet-release.devnet.axelar.dev",
  recoveryApiUrl: "https://axelar-signing-relayer-testnet.axelar.dev",
  axelarCrosschainApiUrl: "https://testnet.api.axelarscan.io/cross-chain",
  axelarscanUrl: "https://testnet.axelarscan.io",
  wssStatus: "",
};
const devnetConfigs: EnvironmentConfigs = {
  resourceUrl: "https://nest-server-devnet.axelar.dev",
  axelarRpcUrl: "",
  axelarLcdUrl: "",
  axelarGMPApiUrl: "https://devnet.api.gmp.axelarscan.io",
  axelarscanBaseApiUrl: "",
  depositServiceUrl: "https://deposit-service-devnet-release.devnet.axelar.dev",
  recoveryApiUrl: "",
  axelarCrosschainApiUrl: "",
  axelarscanUrl: "",
  wssStatus: "",
};
const devnetAmplifierConfigs: EnvironmentConfigs = {
  resourceUrl: "https://nest-server-testnet.axelar.dev",
  axelarRpcUrl: "",
  axelarLcdUrl: "",
  axelarGMPApiUrl: "https://devnet-amplifier.api.gmp.axelarscan.io",
  axelarscanBaseApiUrl: "https://devnet-amplifier.api.axelarscan.io",
  depositServiceUrl: "",
  recoveryApiUrl: "",
  axelarCrosschainApiUrl: "",
  axelarscanUrl: "https://devnet-amplifier.axelarscan.io",
  wssStatus: "",
};
const testnetConfigs: EnvironmentConfigs = {
  resourceUrl: "https://nest-server-testnet.axelar.dev",
  axelarRpcUrl: "https://testnet.rpc.axelar.dev/chain/axelar",
  axelarLcdUrl: "https://lcd-axelar-testnet.imperator.co",
  depositServiceUrl: "https://deposit-service.testnet.axelar.dev",
  axelarGMPApiUrl: "https://testnet.api.gmp.axelarscan.io",
  axelarscanBaseApiUrl: "https://testnet.api.axelarscan.io",
  recoveryApiUrl: "https://axelar-signing-relayer-testnet.axelar.dev",
  axelarCrosschainApiUrl: "https://testnet.api.axelarscan.io/cross-chain",
  axelarscanUrl: "https://testnet.axelarscan.io",
  wssStatus: "wss://gopr1yb0jj.execute-api.us-east-2.amazonaws.com/Test",
};
const mainnetConfigs: EnvironmentConfigs = {
  resourceUrl: "https://nest-server-mainnet.axelar.dev",
  axelarRpcUrl: "https://mainnet.rpc.axelar.dev/chain/axelar",
  axelarLcdUrl: "https://lcd-axelar.imperator.co",
  axelarGMPApiUrl: "https://api.gmp.axelarscan.io",
  axelarscanBaseApiUrl: "https://api.axelarscan.io",
  depositServiceUrl: "https://deposit-service.mainnet.axelar.dev",
  recoveryApiUrl: "https://axelar-signing-relayer-mainnet.axelar.dev",
  axelarCrosschainApiUrl: "https://api.axelarscan.io/cross-chain",
  axelarscanUrl: "https://axelarscan.io",
  wssStatus: "wss://t36nphohri.execute-api.us-east-2.amazonaws.com/Prod",
};

configsMap["local"] = localConfigs;
configsMap["devnet"] = devnetConfigs;
configsMap["devnet-amplifier"] = devnetAmplifierConfigs;
configsMap["testnet"] = testnetConfigs;
configsMap["mainnet"] = mainnetConfigs;

export const getConfigs = (environment: string): EnvironmentConfigs => {
  const configToUse = configsMap[environment];
  if (!configToUse)
    throw new Error(`config environment does not exist for environment: ${environment}`);
  return configToUse;
};

export * from "./EvmChain";
export * from "./GasToken";

// A sample approval execution data on destination chain. Copied it from https://github.com/axelarnetwork/gmp-api/blob/462ebb1176d2f3293ef19fc9122cb8435bfb57b8/config/base_fees.yml#L41C16-L41C22554
export const DEFAULT_L1_EXECUTE_DATA =
  "0x09c5eabe00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000002bc0000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000003e00000000000000000000000000000000000000000000000000000000000000380000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000000000000000000000000000000000000000014000000000000000000000000000000000000000000000000000000000000000016869f63d12923a6b6a1e7d0845bc36761c958f95fc1253061a90b202b4de1e2500000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000001b617070726f7665436f6e747261637443616c6c576974684d696e7400000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000001e000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000140000000000000000000000000ce16f69375520ab01377ce7b88f5ba8c48f8d666d929706526b352b9b3dfac6e02ee8423446d723c431a26a90399a4bfad35ebeb00000000000000000000000000000000000000000000000000000000000001a00000000000000000000000000000000000000000000000000000000012874840944511f98378055372e111bfafd7d08f7d89bc050dafe29c866d8f91e640e949000000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000000000000000000000000000000000000000007506f6c79676f6e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002a30786365313646363933373535323061623031333737636537423838663542413843343846384436363600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000761786c555344430000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000027c0000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000009c0000000000000000000000000000000000000000000000000000000000001ef210000000000000000000000000000000000000000000000000000000000001300000000000000000000000000000000000000000000000000000000000000004900000000000000000000000000bad53bcfa41dfd97b7bbc1aa63ed1e2b60ca6b0000000000000000000000000632ebed87ca01f3209d43dfda57c936970247960000000000000000000000000874289da1dea55c05c37362e8f6c4e2d363ab7600000000000000000000000008f08f6263e5a0af04449f6d656e7bd3d61f5d0b000000000000000000000000105a4f54dfdb4c14df0a8980656521dbedad34ba00000000000000000000000010eb643e5d2b5f43815c9fbf147c50ca017bf739000000000000000000000000115535334d51526c3dd1fd0b9c102f9ce5c41533000000000000000000000000155d7eb55353a3c341cfdabb44e5f6b800eeb388000000000000000000000000199f1099769ba5ff2a09f2e8af3fe17ebf4f75590000000000000000000000001fab6d2a6c47568e8791837b3cd7b08a6175518e0000000000000000000000002139db217c3da96f151c55aca010f75d2c498ebe000000000000000000000000249fb4a02da54ce3ccc2eeebf7cff9adb41cf65c00000000000000000000000025d01a8c55037ea0151756ed8b83c3dffc296ad200000000000000000000000045fd1d9fe52728dc6218456affd0f7e0f9d32582000000000000000000000000490a7a6beb9a6258573cc2cce3e9a86df63171bd0000000000000000000000004eb37f3950b4ff4075d91db895cf6807e8db2ed90000000000000000000000005116fd98e95a98955a2932e9c9ba292e8184f68e00000000000000000000000057670691f78fe49ab9d5a2e4decd7010f8813764000000000000000000000000577bc5713e570b31e7d33a76d0e402404b3cf5ec00000000000000000000000057d6aab745ebec3cdc51d4dac92b1e2f9d6b978c0000000000000000000000006f8def421036933383e774d4c16f23b5ff758bfe00000000000000000000000070d6d6ce17c5a7139179baff95563d726e6208f7000000000000000000000000736d209b5af966917d8b0d499be1cec43b20bb9d00000000000000000000000075ca2f93ad9d621e2fa684148c69909e28a0bfa40000000000000000000000007b6848712d7dd631688dae4c1315f29d008e7814000000000000000000000000884dd182f2f567791131408b127f21ae8a6c901d0000000000000000000000008b80247550a3cac82f767bb91c7995b4291441bb0000000000000000000000008e90188bc4a9d9578722fb63ab702e2c4653a40d0000000000000000000000008f1a0936a0e4bd648e1dd77802a16b6f182e12bd00000000000000000000000090b460ad14efe194d23c9682dafc43d1bba0466f00000000000000000000000094c34cd9ef967c3a0aae0a2a3038f96c97259b83000000000000000000000000980e78073926665a1fdab7eaf139871c43d0ddc40000000000000000000000009aaaf117d36f36d4ddd062fc8d52fe538b31490e000000000000000000000000a517cb0ba3c949d012b13596fefc2803b3b91f0a000000000000000000000000a68465e2ee9f02ef4c5d0e09b2e157a34f631e0b000000000000000000000000a72d82741f3c246efd8b137d2c927188c822b57a000000000000000000000000a87d29cf4ce22694f9df052ccac41acb362698a4000000000000000000000000acc4a07ce7f15a690712967275625721cc677d24000000000000000000000000ae1938f872c66db538739ca0b4ff68a542a7ecda000000000000000000000000ae4bb7e81762f3c256b5b8bec612a6ddcc6d5cef000000000000000000000000afecc724083d8b2ce1a17dc0a5ddac08ce4dac01000000000000000000000000bc3d8181c1edeae088e25b79bd51409e0dff7bb8000000000000000000000000be1766e184f0c4d9832facc8193718638214c61d000000000000000000000000be979a5d5ad1adcfd9f23390dc7a09c16198b8da000000000000000000000000c0145bc5f5cd19888b739660c842c6a7819b4c2b000000000000000000000000c0245e5c54ef2c227063c5502a216a8b0313d1b0000000000000000000000000c2a4c6759e30a891619f2e2e5af247dac9b7365f000000000000000000000000c2ace3790099a0c674ca37121df97e589a1695f1000000000000000000000000c3ffa6d084b4670b91135939e14453f42cdb1f3e000000000000000000000000c4540a44cbc891eefdaf4b9a86f4dd51f4f5600f000000000000000000000000c5ef9cddfcacdd1ffd20aa5717c18424516299a6000000000000000000000000c88ea9cb0d2573a4043f200a16e4534f8393ed3e000000000000000000000000c95851c3f0c6373507f19d47f38b52ca676ef197000000000000000000000000d1acc237de7518447abf3fce08e52b510008a2f5000000000000000000000000d3f175d6e6a669a7d9acf153b5e124a86d38355c000000000000000000000000d7c82bb1774d2322c2318e1c39ee17e8dd07e96c000000000000000000000000d8b290ce78582ed643c0b388dcf670728066ad4b000000000000000000000000dc6ca923d9583378f99038a790ca0fa9c6e26f8d000000000000000000000000df8094d4f507861f303396ab1205d42522bf04c6000000000000000000000000e0913fc169ba723fa358282181389bd3af3ec697000000000000000000000000e3caaa4c45a36a4bd3774cc5781938522fb1feb6000000000000000000000000e8692f729f779c5f64c4010c554e9e98d4817f32000000000000000000000000e9c432933b562471aef1d46eb05d5a3e5d3ee57c000000000000000000000000ea475fceed7ae7a89a6aba573251d935bc17928f000000000000000000000000ea98fc28c13828d6b37b17eaf85ffb655f205398000000000000000000000000ef572e9b96e4302d21450be4fc01b042568f3c7c000000000000000000000000f27700773b00f3b24d31a2e1aa8557292f349b00000000000000000000000000f773a12d7db42d4c216e6f5bae3c7b3e6cc2fb99000000000000000000000000f7e53952f76493f8951671e1d735ff0532688d70000000000000000000000000f94135a221859cee2ea4175659b6eaff335de65b000000000000000000000000fc1e02f1446f4ae5b99d9c05ee1ec4901779339f000000000000000000000000fc6a8d595f05a7025cb1c97fa45bbd7d755497dc000000000000000000000000ff8f73d5b9f3f75fde11e3c6eb23c01c89681b1500000000000000000000000000000000000000000000000000000000000000490000000000000000000000000000000000000000000000000000000000000eee000000000000000000000000000000000000000000000000000000000000076b00000000000000000000000000000000000000000000000000000000000007fe0000000000000000000000000000000000000000000000000000000000000bc90000000000000000000000000000000000000000000000000000000000000e6e00000000000000000000000000000000000000000000000000000000000005300000000000000000000000000000000000000000000000000000000000000d8a000000000000000000000000000000000000000000000000000000000000053d0000000000000000000000000000000000000000000000000000000000000d1200000000000000000000000000000000000000000000000000000000000008c50000000000000000000000000000000000000000000000000000000000000a25000000000000000000000000000000000000000000000000000000000000061f000000000000000000000000000000000000000000000000000000000000104500000000000000000000000000000000000000000000000000000000000006ec0000000000000000000000000000000000000000000000000000000000000e62000000000000000000000000000000000000000000000000000000000000075400000000000000000000000000000000000000000000000000000000000005ae0000000000000000000000000000000000000000000000000000000000000b910000000000000000000000000000000000000000000000000000000000000e2c00000000000000000000000000000000000000000000000000000000000008a000000000000000000000000000000000000000000000000000000000000007560000000000000000000000000000000000000000000000000000000000000a830000000000000000000000000000000000000000000000000000000000001ae00000000000000000000000000000000000000000000000000000000000000b470000000000000000000000000000000000000000000000000000000000000f380000000000000000000000000000000000000000000000000000000000000ddf00000000000000000000000000000000000000000000000000000000000006cb0000000000000000000000000000000000000000000000000000000000000a870000000000000000000000000000000000000000000000000000000000000ae90000000000000000000000000000000000000000000000000000000000000b3a00000000000000000000000000000000000000000000000000000000000008f90000000000000000000000000000000000000000000000000000000000000c5a00000000000000000000000000000000000000000000000000000000000017290000000000000000000000000000000000000000000000000000000000000b400000000000000000000000000000000000000000000000000000000000000fec0000000000000000000000000000000000000000000000000000000000000eb1000000000000000000000000000000000000000000000000000000000000008d0000000000000000000000000000000000000000000000000000000000000eaa00000000000000000000000000000000000000000000000000000000000009340000000000000000000000000000000000000000000000000000000000000a3c00000000000000000000000000000000000000000000000000000000000007d20000000000000000000000000000000000000000000000000000000000000d6d0000000000000000000000000000000000000000000000000000000000000d2a000000000000000000000000000000000000000000000000000000000000009e000000000000000000000000000000000000000000000000000000000000074f0000000000000000000000000000000000000000000000000000000000000eec000000000000000000000000000000000000000000000000000000000000002c0000000000000000000000000000000000000000000000000000000000000c8b0000000000000000000000000000000000000000000000000000000000000d800000000000000000000000000000000000000000000000000000000000000e6c0000000000000000000000000000000000000000000000000000000000000cf30000000000000000000000000000000000000000000000000000000000001082000000000000000000000000000000000000000000000000000000000000070700000000000000000000000000000000000000000000000000000000000007750000000000000000000000000000000000000000000000000000000000000fc60000000000000000000000000000000000000000000000000000000000000cc800000000000000000000000000000000000000000000000000000000000007e80000000000000000000000000000000000000000000000000000000000000ccb00000000000000000000000000000000000000000000000000000000000008490000000000000000000000000000000000000000000000000000000000000cca0000000000000000000000000000000000000000000000000000000000000b490000000000000000000000000000000000000000000000000000000000000dcd00000000000000000000000000000000000000000000000000000000000006180000000000000000000000000000000000000000000000000000000000000d6500000000000000000000000000000000000000000000000000000000000012f50000000000000000000000000000000000000000000000000000000000000a830000000000000000000000000000000000000000000000000000000000000b58000000000000000000000000000000000000000000000000000000000000061c0000000000000000000000000000000000000000000000000000000000000cbf000000000000000000000000000000000000000000000000000000000000149b000000000000000000000000000000000000000000000000000000000000071a00000000000000000000000000000000000000000000000000000000000010d500000000000000000000000000000000000000000000000000000000000007590000000000000000000000000000000000000000000000000000000000000021000000000000000000000000000000000000000000000000000000000000042000000000000000000000000000000000000000000000000000000000000004a0000000000000000000000000000000000000000000000000000000000000052000000000000000000000000000000000000000000000000000000000000005a0000000000000000000000000000000000000000000000000000000000000062000000000000000000000000000000000000000000000000000000000000006a0000000000000000000000000000000000000000000000000000000000000072000000000000000000000000000000000000000000000000000000000000007a0000000000000000000000000000000000000000000000000000000000000082000000000000000000000000000000000000000000000000000000000000008a0000000000000000000000000000000000000000000000000000000000000092000000000000000000000000000000000000000000000000000000000000009a00000000000000000000000000000000000000000000000000000000000000a200000000000000000000000000000000000000000000000000000000000000aa00000000000000000000000000000000000000000000000000000000000000b200000000000000000000000000000000000000000000000000000000000000ba00000000000000000000000000000000000000000000000000000000000000c200000000000000000000000000000000000000000000000000000000000000ca00000000000000000000000000000000000000000000000000000000000000d200000000000000000000000000000000000000000000000000000000000000da00000000000000000000000000000000000000000000000000000000000000e200000000000000000000000000000000000000000000000000000000000000ea00000000000000000000000000000000000000000000000000000000000000f200000000000000000000000000000000000000000000000000000000000000fa0000000000000000000000000000000000000000000000000000000000000102000000000000000000000000000000000000000000000000000000000000010a0000000000000000000000000000000000000000000000000000000000000112000000000000000000000000000000000000000000000000000000000000011a0000000000000000000000000000000000000000000000000000000000000122000000000000000000000000000000000000000000000000000000000000012a0000000000000000000000000000000000000000000000000000000000000132000000000000000000000000000000000000000000000000000000000000013a000000000000000000000000000000000000000000000000000000000000014200000000000000000000000000000000000000000000000000000000000000041d90ab8f6f676297769e5ee3741081e139e756b8063857f915f3c18aa55492b0377c850301f44b44ae6a51b24315eb83a3d0967ac92adca3c457337aa4bfcb2e01b000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000041d40296c343f1031bcc9998a86b6c5cb66297d657ec03c810186102d8c6b2f3a23ba952ff9359c4f221f159ce8df08c5131e27ced0ad065dfe9f7164e567348461c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000041f97f77d4478080d7f8a05c575017e135e77480321369ffaa886c8cf5151fa2a17622f2584ae9ced15f96c2cebf3df5626640d6e96c9324aecb8af619ad3b7b541c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000041388107e16868f12a21d50e2636b53a69475cd30e2c33b7640c66ca0018096c2d4ef5db8134e2dc52481d655dd8e581acc2d0fb8f7be83c6df42d6c5cd1b58ba31c00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004114c457f899d174dbe91b6cfe8b95dba26c2a4c936ed55b70de29f94902fa7d2936cb2bf999409a5bded8f56aa765e9aa7818f4872fd99c37a34a238bc3873f671c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000041117fb0e77bb1796ec1c118c7cff16ca6ae86fe57e184be7e260c07ca9cb65f0711d8d6b06d8da2c6f214ef06e75fac49e83bd445c1f30d1add3681640fb0b8031b000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000041ffb29e3b044a9a8fa7c3fee4c7f68bf5bc9ee8defa8db9f97d94de40fbdbde2357eccb3abe2af80382450e7b68774d3743cd166d2a4e0fd637d582e93e19a35a1c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000041326be6706a7c1b5751ee46ced1889832203279021a14962cd279749e7547b77f591552dd62f251b921cb8223b24b00c003faa5aa832c64d3b9e79245661227c51b000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000041b2b6002f94c413aa8578af51f852516a270d248920d76ec5a6c4f837551796815c6878e787c9d350af951ff82348e6452adc5e6dc1933e592a16c154bd5acc681b0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000414e45aba2560943bdfd56edf9df33a45bcf00ab702785b0569dbb41a1b267d2db21baf6a1fbd88dd8486a3ba5d9e12236af44fe943115661664262250c5c017c51b000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000041f8b76e83d766fd95c1614c8631043b66689e54cb54e3a51dfcdce28396d3fccb0909fdc3434db2fc2f243991f85fce499af313854642ca581767c976802c3a831b00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004127820cd6b978540aa3344a419c7bf2e2a4f22ed632f1bf90da81d3c278677c961c9b27cb3860655d7b102c36cb1523c020094e55309076d0038351eb25f1f33e1c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000041c77d02fe8848c9655ba162dee11caa4db78bc7258ca3c38d625fe32de92590ae0c8cc49be7c65290e49659c6668967842895a2115ece167822c1062b496983031b000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000041f67348761e1fb729024ecc6bb1ee1cedd94baa1be508b09617f0c4a1cd9a784a2964fbdeb7e4f49759c7f38e17dab1c3b1dc28255b309d3cb875494d393feb7b1b000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000041af9215d79b43982e763e1513bf202265415fca5e7bc964e88873239c5e5bf99467ee716fb6b26edf1d1ef0d8ec7de6f7b48d03b0169cdbe874430d2d3db9c5ae1c0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000414e23c63ef6953a0353bc7ff6146f8f9ba8a61808fbb483dc5b6fd2abb324eea7024e152ee45e3f9f8b89ab68846170525b1815662faeeecee0efa9cc5c8cdf631c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000041236b4b802c2ec5eb387f93d648f05ef37357d7bcbd0a81fb5f0f7ec34fae7db25ef00b5cbd88fa8c899be149df0f1e3f455916125ab3fefbe3692b0ee1ebee521b00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004191b5a0cee4d6c1ac37b0f3b67a01338eeb584733ab9eaff25d9356a8d23b57b70bf77f919eb57013a28a0186c581e5d508e97f6ab7d6ef62106246f61f00e5c81b0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000410342c70ad29d199923730ba99c533ef282414d4e0d4bc0ddb791335aff09e8ad110d8259ed7b2331f948e249aa5dfc3a9699d90bce280d8ce6829fb296e42e001b00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004120738466897dac80150f30578868a2ad6b21cb06a0a0e9dde28d91b64adbf55060184accaae153116004e737153abe8850b48006d9942378eafcc7c9d623bc411c0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000415a6a6fa17851789c70b29dd58b84b0b0bf3a7b0c421387af8b0895cfc064b1307a3516f497578115a19fbb9619dd3cbb1299700cd0fbed757ab3463bc7a2e4111c0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000415c6910606af5911ba68d5581b5c6c0de3bdefa24cafd7abc898366b0f512aa662509ad62396bf0a7b22980db89a2fbb31da2c1e8811d7936a3a24301cf2aa9951b00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004131760d8ada5433d2111f38ead2507d0ae48d62f417540d58b779105aac8b52162311c081604773763ea11cad5995f4b7659da989524d4396dba6ff9a65d1cc131b000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000041a65f9d59a84b798a9a4cbb6b321573bb7614d59e07ae562fd32dcc1005d823ae7c9d6e22b524e3bdd681fd7a028b8136ed3d02113ba90ec8734dc5036a5b4f931c0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000410c974a6bbc3e767e39832140a661c45791fdff841a2e12b1324011a6e7104c3574be95898b98e3d29f943078f701f0916a243142bb7fb7215933544c97cb6f121b000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000041eef19484116fd4d50e78b3b9ffc0bbed42fa28da05ff2c989dc2d495a7f11a7a2c8eb7244ad13f2ab1182d8d68912260a35ed0e40ee41f3b4a45489efca358141c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000041f562d048abdf167f080c3bfed53687ce4537b6f17cc7267eb26aadf1410381455a31f6bc516bde6b2399150615561c3d0349fd1443b710f650de6dbc71d92b151b000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000041829f74017e53d23a93d0d894a96dad4aed7379d7f726d69b515c182bc157152f2638e7fa46a1ecf588d4450c5e303a05ea7ed960e8fb4f28aeeb7a62e1acfbc31c0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000417a08ffef9b49f3addd3a54ec293da9a0dc696536be2c56ea764d27cd1423981f0354501d54e8f5f7f8783ad7910dae4c281345c73c584f8171ad9ecd1e6eb4dc1c0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000411931fa1f971cde70b4d26b6abe6994d8cd60167cd3fd456f8fc8ac31809f761e3b4197dcd91a5de7233e20b799ac243d764aaea430d5597e49973bbb76784cf31c0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000412afa4a6a5e29aabc4cf744fe7bc26370ec8a7554ae33af7514782509d7bed8903262769e6e031f0326e1ad869a8c32656fc6cbf71f82d4f0657ab864f89379641b000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000041ae2a9430bc790a7e95e4b69cfc8d3af1dd52688fb9aac974e81435728340e2a07ef5ba06b3b980b045525ea8150c673bf7fe9f007cc6fad7e061ca48bfea0ebd1c00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004180881a76bffea4ea0d28fa9ea9193455e2ce962a72ab4e724450938190f1420d1781e47360816dd991f8b55dc477b7db358a8f92a3389a1f2d3cc06be3addbb51c00000000000000000000000000000000000000000000000000000000000000";
