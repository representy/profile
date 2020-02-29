const {writeFileSync} = require('fs');
const core = require('@actions/core');

const { REPRESENTY = 'representy', DATA_PATH = 'data.json'} = process.env;

try {
    const name = core.getInput('name', { required: true });
    const photo = core.getInput('photo') || '';
    const title = core.getInput('title') || '';
    const location = core.getInput('location') || '';
    const describe = core.getInput('describe') || '';
    const profile = {
        name,
        photo,
        title,
        location,
        describe
    };
    writeFileSync(`${REPRESENTY}/${DATA_PATH}`, JSON.stringify(profile, null, 2));
} catch (error) {
    core.setFailed(error.message);
}