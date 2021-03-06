import dayDiff from './day-diff';

// ******************************
// Tests:
// ******************************

describe('Day Diff', () => {
    test(`2020-01-01 - 2020-01-01`, () => expect(dayDiff(new Date('2020-01-01'), new Date('2020-01-01'))).toEqual(0));
    test(`2020-01-01 - 2020-01-02`, () => expect(dayDiff(new Date('2020-01-01'), new Date('2020-01-02'))).toEqual(1));
    test(`2020-01-01 - 2020-02-01`, () => expect(dayDiff(new Date('2020-01-01'), new Date('2020-02-01'))).toEqual(31));
    test(`2020-02-01 - 2020-03-01`, () => expect(dayDiff(new Date('2020-02-01'), new Date('2020-03-01'))).toEqual(29));
    test(`2020-04-01 - 2020-05-01`, () => expect(dayDiff(new Date('2020-04-01'), new Date('2020-05-01'))).toEqual(30));

    test(`2020-05-01 09:00:00 - 2020-05-01 10:00:00`, () => expect(dayDiff(new Date('2020-05-01 09:00:00'), new Date('2020-05-01 10:00:00'))).toEqual(0));
    test(`2020-05-01 00:00:00 - 2020-05-01 23:59:59`, () => expect(dayDiff(new Date('2020-05-01 00:00:00'), new Date('2020-05-01 23:59:59'))).toEqual(0));
    test(`2020-05-01 00:00:00 - 2020-05-02 00:00:00`, () => expect(dayDiff(new Date('2020-05-01 00:00:00'), new Date('2020-05-02 00:00:00'))).toEqual(1));
    test(`2020-05-01 00:00:01 - 2020-05-01 23:59:59`, () => expect(dayDiff(new Date('2020-05-01 00:00:01'), new Date('2020-05-01 23:59:59'))).toEqual(0));
    test(`2020-05-01 00:00:01 - 2020-05-02 00:00:00`, () => expect(dayDiff(new Date('2020-05-01 00:00:01'), new Date('2020-05-02 00:00:00'))).toEqual(1));
    test(`2020-05-01 23:59:59 - 2020-05-02 00:00:00`, () => expect(dayDiff(new Date('2020-05-01 23:59:59'), new Date('2020-05-02 00:00:00'))).toEqual(1));
});

// ******************************
