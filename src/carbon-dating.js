const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {

    if (typeof sampleActivity !== 'string') {
        return false;
    }

    const nSampleActivity = parseFloat(sampleActivity);
    if (isNaN(nSampleActivity)) {
        return false;
    }

    if (nSampleActivity > MODERN_ACTIVITY || nSampleActivity <= 0) {
        return false;
    }

    const k = 0.693 / HALF_LIFE_PERIOD;
    const t = Math.log(MODERN_ACTIVITY / nSampleActivity) / k;

    return Math.ceil(t);
};