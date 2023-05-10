export interface Pet {
  name: string;
  petType: string;
}

export interface Cat extends Pet {
  color: string;
}

export interface Dog extends Pet {
  age: string;
}