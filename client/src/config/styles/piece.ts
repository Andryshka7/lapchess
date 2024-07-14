interface Helper {
	[key: number | string]: string
}

const leftValue: Helper = {
	0: 'left-[0%]',
	1: 'left-[12.5%]',
	2: 'left-[25%]',
	3: 'left-[37.5%]',
	4: 'left-[50%]',
	5: 'left-[62.5%]',
	6: 'left-[75%]',
	7: 'left-[87.5%]'
}

const topValue: Helper = {
	0: 'top-[0%]',
	1: 'top-[12.5%]',
	2: 'top-[25%]',
	3: 'top-[37.5%]',
	4: 'top-[50%]',
	5: 'top-[62.5%]',
	6: 'top-[75%]',
	7: 'top-[87.5%]'
}

export const left = (x: number) => leftValue[x]
export const top = (y: number) => topValue[y]
