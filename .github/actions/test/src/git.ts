import * as core from '@actions/core'
import * as github from '@actions/github'
import * as exec from '@actions/exec'

export async function config(name: string, email: string): Promise<void> {
  await exec.exec('git', ["config", "--global", "user.name", name]);
  await exec.exec('git', ["config", "--global", "user.email", email]);
}

export async function add(): Promise<number> {
  return await exec.exec('git', ["add", '--all']);
}

export async function diff(): Promise<boolean> {
  const code = await exec.exec('git', ["diff", "--staged", "--quiet"], {
    ignoreReturnCode: true
  });

  return code > 0;
}

export async function commit(message: string) {
  await exec.exec('git', ["commit", "--message", message]);
}

export async function push() {
  const token = core.getInput('GITHUB_TOKEN');
  const owner = github.context.repo.owner;
  const repo = github.context.repo.repo;
  const origin = `https://x-access-token:${token}@github.com/${owner}/${repo}`;
  await exec.exec('git', ["remote", "set-url", "origin", origin]);
  await exec.exec('git', ["push"]);
}
