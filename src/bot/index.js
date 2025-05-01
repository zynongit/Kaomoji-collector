const { Probot } = require('probot');
const commands = require('./commands');

module.exports = (app) => {
  app.on('issue_comment.created', async (context) => {
    const comment = context.payload.comment.body;
    if (comment.startsWith('/kaomoji')) {
      const response = await commands.handleKaomojiCommand(comment);
      await context.octokit.issues.createComment({
        issue_number: context.issue().number,
        owner: context.repo().owner,
        repo: context.repo().repo,
        body: response,
      });
    }
  });
};
