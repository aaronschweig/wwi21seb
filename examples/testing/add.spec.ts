import {assert, describe, expect, test} from 'vitest'
import { add } from './add'

describe('', () => {
    test('should return the sum of the two input parameters', () => {

        const result = add(1,2)

        expect(result).toBe(3)

        // assert.equal(result, 3)
    })

})