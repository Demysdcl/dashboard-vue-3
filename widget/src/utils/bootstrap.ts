interface SetupType {
  onProduction: () => void
  onDevelopment: () => void
}

export const setup = ({ onProduction, onDevelopment }: SetupType): void =>
  process.env.NODE_ENV === 'production' ? onProduction() : onDevelopment()
