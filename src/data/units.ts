import { Unit } from '../types';

export const units: Unit[] = [
  {
    id: 1,
    name: 'Tesla Trooper',
    faction: 'Soviets',
    role: 'Anti-Infantry / Anti-Vehicle',
    cost: 900,
    health: 200,
    speed: 4,
    description: 'Элитный пехотинец СССР с тесла-оружием. Может заряжать тесла-катушки и выживать в воде.',
    abilities: ['Tesla Charge', 'Immune to dogs', 'Amphibious'],
    image: '/images/tesla-trooper.jpg'
  },
  {
    id: 2,
    name: 'Natasha Volkova',
    faction: 'Soviets',
    role: 'Commando',
    cost: 2000,
    health: 150,
    speed: 6,
    description: 'Лучший снайпер мира. Может уничтожать пехоту и технику одним выстрелом, вызывать авиаудар.',
    abilities: ['Sniper Shot', 'Airstrike', 'Swim'],
    image: '/images/natasha.jpg'
  },
  {
    id: 3,
    name: 'Apollo Fighter',
    faction: 'Allies',
    role: 'Air Superiority Fighter',
    cost: 1200,
    health: 120,
    speed: 10,
    description: 'Быстрый истребитель Альянса. Идеален против авиации противника.',
    abilities: ['Return to base', 'Laser missiles'],
    image: '/images/apollo.jpg'
  },
  {
    id: 4,
    name: 'Kirov Airship',
    faction: 'Soviets',
    role: 'Strategic Bomber',
    cost: 2500,
    health: 600,
    speed: 3,
    description: 'Гигантский дирижабль с огромными бомбами. Медленный, но практически неуязвимый.',
    abilities: ['Gastro Acid Bombs', 'Self-repair'],
    image: '/images/kirov.jpg'
  },
  {
    id: 5,
    name: 'Tanya',
    faction: 'Allies',
    role: 'Commando',
    cost: 2000,
    health: 180,
    speed: 7,
    description: 'Легендарная Таня возвращается! Уничтожает здания мгновенно и плавает.',
    abilities: ['Dual Pistols', 'C4 Charges', 'Time Belt', 'Swim'],
    image: '/images/tanya.jpg'
  },
  {
    id: 6,
    name: 'Yuriko Omega',
    faction: 'Empire of the Rising Sun',
    role: 'Psychic Commando',
    cost: 2000,
    health: 200,
    speed: 6,
    description: 'Психическая школьница. Может подбрасывать танки силой мысли и убивать пилотов внутри техники.',
    abilities: ['Psychokinesis', 'Mind Control', 'Psychic Shockwave'],
    image: '/images/yuriko.jpg'
  }
];