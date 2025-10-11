export type GitHubRepo = { name: string; html_url: string; description: string | null; stargazers_count: number }

export async function fetchRecentRepos(user: string, count = 6): Promise<GitHubRepo[]> {
  const res = await fetch(`https://api.github.com/users/${user}/repos?sort=updated&per_page=${count}`)
  if (!res.ok) throw new Error(`GitHub API error: ${res.status}`)
  return res.json()
}
// Uso: const repos = await fetchRecentRepos('LeonardoSSm')
