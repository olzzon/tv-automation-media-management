import { FramesToMs, FramesToTimestamp } from '../timeConversion'

describe('Time conversion', () => {
	it('Converts frame 1 at 25p', () => {
		const result = FramesToTimestamp(0, '1/25')
		expect(result).toBe('00:00:00.000')
	})

	it('Converts frame 25 at 25p', () => {
		const result = FramesToTimestamp(24, '1/25')
		expect(result).toBe('00:00:00.960')
	})

	it('Converts frame 100 at 25p', () => {
		const result = FramesToTimestamp(99, '1/25')
		expect(result).toBe('00:00:03.960')
	})

	it('Converts frame 10000 at 25p', () => {
		const result = FramesToTimestamp(10000 - 1, '1/25')
		expect(result).toBe('00:06:39.960')
	})

	it('Converts 25 frames to 1000ms', () => {
		const result = FramesToMs(25, '1/25')
		expect(result).toBe(1000)
	})

	it('Converts 10000 frames to 400000ms', () => {
		const result = FramesToMs(10000, '1/25')
		expect(result).toBe(400000)
	})
})
