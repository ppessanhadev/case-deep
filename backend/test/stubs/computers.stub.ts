import { Computer } from '@prisma/client';

export const computersStub: Computer[] = [
  {
    id: 'f1f11450-6365-4b8d-970a-b813899c4e96',
    branchId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
    name: 'Macbook air M2 (2022)',
    description: 'Featuring FaceTime HD camera, Touch ID, and vibrant Retina display.',
    quantity: 5,
    brand: 'Unknown',
  },
  {
    id: '2e0828ab-faaa-4d74-a6d1-5b04b5ed6e47',
    branchId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
    name: 'Aorus 7 (2023)',
    description:
      'The 360Hz gaming panel with a high screen-to-body ratio, enabling gamers to be immersed in smooth, high-quality visuals akin to a movie theater or top-tier e-sports room.',
    quantity: 5,
    brand: 'Gigabyte',
  },
  {
    id: '9193da94-91f2-41ea-807c-cca3244df558',
    branchId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
    name: 'Acer Nitro 5',
    description:
      'Reign over the game world with the combined power of a 12th Gen Intel® Core™ i7 processor1 with its new performance hybrid architecture and NVIDIA® GeForce RTX™ 30 Series GPUs.',
    quantity: 5,
    brand: 'Asus',
  },
];
