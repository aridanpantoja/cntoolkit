export const transceivers = [
  { type: 'SFP', transmissionRate: 1, power: { min: -15, max: -1 } }, // Ex: Cisco GLC-LH-SMD
  { type: 'SFP+', transmissionRate: 10, power: { min: -12, max: 0 } }, // Ex: Cisco SFP-10G-SR
  { type: 'QSFP', transmissionRate: 40, power: { min: -10, max: 0 } }, // Ex: Finisar FTLX1471M3BNL
  { type: 'QSFP28', transmissionRate: 100, power: { min: -8, max: 0 } }, // Ex: Cisco QSFP-100G-SR4
  { type: 'QSFP28+', transmissionRate: 200, power: { min: -8, max: 0 } }, // Ex: Arista Networks SFP-100G-SR4
  { type: 'QSFP-DD', transmissionRate: 400, power: { min: -3, max: 0 } }, // Ex: Cisco QSFP-DD-200G-SR4
]
