import * as core from '@actions/core'
import * as github from '@actions/github'
import * as exec from '@actions/exec'

const options: exec.ExecOptions = {};
options.listeners = {
  stdout: (data: Buffer) => {
    console.log(data.toString())
  },
  stderr: (data: Buffer) => {
    console.error(data.toString())
  }
};

export async function config(name: string, email: string): Promise<void> {
  await exec.exec('git', ["config", "--global", "user.name", name], options);
  await exec.exec('git', ["config", "--global", "user.email", email], options);
}

export async function add(path: string): Promise<number> {
  return await exec.exec('git', ["add", "--all"]);
}

export async function commit(message: string) {
  await exec.exec('git', ["commit", "--message", message], options);
}

export async function push() {
  const token = core.getInput('GITHUB_TOKEN');
  const owner = github.context.repo.owner;
  const repo = github.context.repo.repo;
  const origin = `https://x-access-token:${token}@github.com/${owner}/${repo}`;
  await exec.exec('git', ["remote", "set-url", "origin", origin], options);
  await exec.exec('git', ["push"], options);
}
