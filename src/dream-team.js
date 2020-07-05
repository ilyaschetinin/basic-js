module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }

  return members
    .filter(m => typeof m === 'string')
    .map(m => m.trim())
    .filter(m => m.length > 0)
    .map(m => m.charAt(0).toUpperCase())
    .sort()
    .join('');
};
