import { colors, fontSizes, fonts } from '@entrapta/tokens'
import { getContrast } from 'polished'

export function ColorsGrid() {
  return Object.entries(colors).map(([key, color]) => {
    return (
      <div key={key} style={{ backgroundColor: color, padding: '2rem' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: fontSizes.lg,
            fontFamily: fonts.code,
            color: getContrast(color, '#FFF') < 3.5 ? '#000' : '#FFF',
          }}
        >
          <strong style={{ fontFamily: fonts.code }}>${key}</strong>
          <span>{color}</span>
        </div>
      </div>
    )
  })
}
