declare module 'react-shapes'

interface Perimeter {
	type: ShapeType
	value: number
}

interface Area {
	type: ShapeType
	value: number
}

type ShapeType = 'Cuadrado' | 'Rectangualo' | 'Circulo' | 'Triangulo' | 'Rombo'
