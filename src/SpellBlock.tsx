import React from 'react';
import { PCClass } from './PCClass';

export type SpellBlockProps = {
  name: string;
  level: number;
  spellType: string;
  castingTime: string;
  ritual?: boolean;
  voice?: boolean;
  somatic?: boolean;
  material?: boolean;
  materialDescription?: string;
  classes: PCClass[] | [ 'all' ];
  concentration?: boolean;
  duration: string;
  range: number;
}

const componentBlock = ({ voice, somatic, material, materialDescription}: SpellBlockProps) => {
  const components = [];

  if (voice) {
    components.push('V');
  }

  if (somatic) {
    components.push('S');
  }

  if (material) {
    components.push('M');
  }

  if (materialDescription) {
    components.push(`(${materialDescription})`);
  }

  return components.join(' ');
}

export const SpellBlock: React.FC<SpellBlockProps> = props => (
  <>
    <h1>{props.name}</h1>
    <p>Level {props.level} {props.spellType}</p>
    <table className='table'>
      <thead>
        <tr>
          <th>Casting Time</th>
          <th>Range</th>
          <th>Components</th>
          <th>Duration</th>
          <th>Classes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{props.castingTime}{props.ritual && ', Ritual'}</td>
          <td>{props.range}</td>
          <td>
            {componentBlock(props)}
          </td>
          <td>{props.duration} {props.concentration && '(Concentration)'}</td>
          <td>{props.classes.join(', ')}</td>
        </tr>
      </tbody>
    </table>
    <p>
      {props.children}
    </p>
  </>
)