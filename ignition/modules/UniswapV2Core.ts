import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("UniswapV2Core", (m) => {

const feeToSetter = "0x0000000000000000000000000000000000000000";

  // Deploy UniswapV2Factory
  const factory = m.contract("UniswapV2Factory", [feeToSetter]);

  return {
    factory,
  };
});
