import { Form, Radio } from 'antd';
import React from 'react';

export enum InstructionType {
  UpgradeProgram,
  AnchorIDLSetBuffer,
  GovernanceSetConfig,
  SplTokenTransfer,
  SplTokenSale,
  SplTokenSaleTransfer,
  SplTokenMintTo,
  GovernanceSetRealmConfig,
  MangoAddOracle,
  MangoAddSpotMarket,
}

const instructionNames = [
  'upgrade',
  'anchor idl set-buffer',
  'set-governance-config',
  'spl-token transfer',
  'spl-token sale',
  'spl-token sale-transfer',
  'spl-token mint-to',
  'set-realm-config',
  'mango add oracle',
  'mango add spot-market',
];

export function InstructionSelector({
  instructions,
  onChange,
}: {
  instructions: InstructionType[];
  onChange: (instruction: InstructionType) => void;
}) {
  return (
    <Form.Item name="instructionType" label="instruction">
      <Radio.Group onChange={e => onChange(e.target.value)}>
        {instructions.map(i => (
          <Radio.Button value={i} key={i}>
            {instructionNames[i]}
          </Radio.Button>
        ))}
      </Radio.Group>
    </Form.Item>
  );
}
