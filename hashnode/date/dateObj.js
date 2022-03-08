function getTodayObj() {
    return new Date();
}
// Returns date obj on which you can apply all date methods.
// > Tue Mar 01 2022 10:42:34 GMT+0530 (India Standard Time)

function getTodayString() {
    return Date();
}
// Returns Date in String format.
// > 'Tue Mar 01 2022 10:43:24 GMT+0530 (India Standard Time)'

function getTodayMilliSeconds() {
    return Date.now();
}
// > 1646111650943

function getTodayUtcString() {
    return new Date().toUTCString();
}
// > Tue, 01 Mar 2022 05:14:22 GMT

function getTodayUtcTZFormat() {
    return new Date().toISOString();
}
// > 2022-03-01T05:14:42.479Z

function getDateDifference() {
    const date1 = new Date('7/13/2010');
    const date2 = new Date('12/15/2010');
    return (date2 - date1) / (1000 * 60 * 60 * 24);
}

function getDateTimeInMilliseconds() {
    return new Date(2022, 02, 01, 00, 00, 00, 0).getTime();
}

function getUnixTimeStamp() {
    return new Date(2022, 02, 01, 00, 00, 00, 0).getTime() / 1000;
}

function getUtcInMilliseconds() {
    return Date.UTC(2022, 02, 01, 00, 00, 00, 0);
}

function getDayName() {
    return new Date().toLocaleDateString('en-US', { weekday: 'short'});
}

function getMonthName() {
    return new Date().toLocaleDateString('en-US', { day: 'short'});
}

function getDateOnly() {
    const date = new Date();
    return date.getFullYear()+'-'+ (date.getMonth() + 1) + '-' + date.getDate();
}

// format: mm/dd/yyyy
function getDateOnly() {
    return new Date().toLocaleDateString('en-US', {day: '2-digit', month: '2-digit', year: 'numeric'});
}

// format: dd/mm/yyyy
function getDateOnly() {
    return new Date().toLocaleDateString('en-GB');
}

// Using localeString, format: mm/dd/yyyy
function getDateOnly() {
    return new Date().toLocaleString().split(',')[0];
}

// Using localeString, format: yyyy-mm-dd
function getDateOnly() {
    return new Date().toISOString().split('T')[0];
}


function getTimeOnly() {
    const date = new Date();
    return date.getHours()+':'+ date.getMinutes() + ':' + date.getSeconds();
}

function getTimeOnly() {
    return new Date().toLocaleTimeString();
}

function getTimeOnly() {
    return new Date().toLocaleTimeString('en-GB');
}

function getTimeInHrsMins() {
    return Intl.DateTimeFormat('en-US', { hour: "numeric", minute: "numeric", hour12: true }).format(new Date());
}

function getTimezoneName() {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
}

function addDay() {
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
    return tomorrow;
}

function subtractDay() {
    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);
    return yesterday;
}

function addMonth() {
    const today = new Date();
    const nextMonthToday = new Date();
    nextMonthToday.setMonth(today.getMonth() + 1);
    return nextMonthToday;
}

console.log(addMonth());