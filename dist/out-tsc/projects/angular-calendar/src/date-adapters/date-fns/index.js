var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { adapterFactory as baseAdapterFactory } from 'calendar-utils/date-adapters/date-fns';
import * as addWeeks from 'date-fns/add_weeks/index';
import * as addMonths from 'date-fns/add_months/index';
import * as subDays from 'date-fns/sub_days/index';
import * as subWeeks from 'date-fns/sub_weeks/index';
import * as subMonths from 'date-fns/sub_months/index';
import * as getISOWeek from 'date-fns/get_iso_week/index';
import * as setDate from 'date-fns/set_date/index';
import * as setMonth from 'date-fns/set_month/index';
import * as setYear from 'date-fns/set_year/index';
import * as getDate from 'date-fns/get_date/index';
import * as getYear from 'date-fns/get_year/index';
export function adapterFactory() {
    return __assign({}, baseAdapterFactory(), { addWeeks: addWeeks,
        addMonths: addMonths,
        subDays: subDays,
        subWeeks: subWeeks,
        subMonths: subMonths,
        getISOWeek: getISOWeek,
        setDate: setDate,
        setMonth: setMonth,
        setYear: setYear,
        getDate: getDate,
        getYear: getYear });
}
//# sourceMappingURL=index.js.map