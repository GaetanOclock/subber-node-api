const Original = require('../model/Original');
const Slot = require('../model/Slot');
const Sub = require('../model/Sub');
const User = require('../model/User');
const Video = require('../model/Video');

module.exports = {
    associate: () => {
        // Original ON 11 Video
        Original.hasMany(Video, {foreignKey: 'original_id'});
        Video.belongsTo(Original, {foreignKey: 'original_id'});
        // Original ON 11 Slot
        Original.hasMany(Slot, {foreignKey: 'original_id'});
        Slot.belongsTo(Original, {foreignKey: 'original_id'});
        // Video ON 11 Sub
        Video.hasMany(Sub, {foreignKey: 'video_id'});
        Sub.belongsTo(Video, {foreignKey: 'video_id'});
        // Slot ON 11 Sub
        Slot.hasMany(Sub, {foreignKey: 'slot_id'});
        Sub.belongsTo(Slot, {foreignKey: 'slot_id'});
        // User ON 11 Sub
        User.hasMany(Sub, {foreignKey: 'user_id'});
        Sub.belongsTo(User, {foreignKey: 'user_id'});
        // User ON 11 Video
        User.hasMany(Video, {foreignKey: 'user_id'});
        Video.belongsTo(User, {foreignKey: 'user_id'});
    }
}
