<div align="center">
  <img height="150" width="150"  src="http://ryanseys.com/img/moon.png"/>
</div>

ES Module version of [lune](https://github.com/ryanseys/lune) - calculate the phases of the moon

This library calculates the current phase of the moon as well as finds the dates of the recent moon phases.

## Installation

```bash
npm install @sevensec114/lune-esm
```

## Usage

### In Browser

```html
<script type="module">
  import { phase } from '@sevensec114/lune-esm';

  const phaseInfo = phase(new Date());
  console.log(phaseInfo);
</script>
```

### In Node.js

```javascript
import { phase, phase_hunt, phase_range, PHASE_NEW, PHASE_FIRST, PHASE_FULL, PHASE_LAST } from '@sevensec114/lune-esm';

// Get current moon phase
const currentPhase = phase(new Date());
console.log(currentPhase);

// Hunt for recent moon phases
const phaseHunt = phase_hunt(new Date());
console.log(phaseHunt);

// Get phase range
const start = new Date('2023-01-01');
const end = new Date('2023-02-01');
const fullMoons = phase_range(start, end, PHASE_FULL);
console.log(fullMoons);
```

## API

### phase(phase_date)

Finds the phase information for specific date.

- `phase_date` - Date to get phase information of. Defaults to current date.
- Returns an object with:
  - `phase` - Phase value (0 to 1)
  - `illuminated` - Illuminated percent (0 to 1)
  - `age` - Age of the moon in days
  - `distance` - Distance from Earth to Moon (km)
  - `angular_diameter` - Angular diameter of Moon
  - `sun_distance` - Distance from Earth to Sun (km)
  - `sun_angular_diameter` - Angular diameter of Sun

### phase_hunt(sdate)

Find time of phases of the moon which surround the current date.
Five phases are found, starting and ending with the new moons which bound the current lunation.

- `sdate` - Date to start hunting from (defaults to current date)
- Returns an object containing recent past and future phases:
  - `new_date` - Date of last new moon
  - `q1_date` - Date of first quarter moon
  - `full_date` - Date of full moon
  - `q3_date` - Date of last quarter moon
  - `nextnew_date` - Date of next new moon

### phase_range(start, end, phase)

Find all phases of a given type within a date range.

- `start` - Start date
- `end` - End date
- [phase](file:///mnt/data/lang/Git/three-mc-wallpaper/node_modules/lune/lib/lune.js#L120-L189) - Phase type (PHASE_NEW, PHASE_FIRST, PHASE_FULL, PHASE_LAST)
- Returns array of dates

### Constants

- `PHASE_NEW` - New moon constant (0)
- `PHASE_FIRST` - First quarter moon constant (1)
- `PHASE_FULL` - Full moon constant (2)
- `PHASE_LAST` - Last quarter moon constant (3)

## Example

```javascript
import { phase } from '@sevensec114/lune-esm';

const currentPhase = phase(new Date());
console.log(`Moon phase: ${currentPhase.phase}`);
console.log(`Illuminated: ${(currentPhase.illuminated * 100).toFixed(2)}%`);
```

## Original Work

This is a derivative work based on [lune](https://github.com/ryanseys/lune) by Ryan Seys, converted to ES Modules.

## License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.