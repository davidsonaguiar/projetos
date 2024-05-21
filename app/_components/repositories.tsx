"use client";

import { useGitHubAutomatedRepos,  } from "github-automated-repos";
import RepositoryCard from "./repository-card";

const USERNAME = "DIGOARTHUR";
const KEY = "deploy";

export default function Repositories() {
  const repositories = useGitHubAutomatedRepos(USERNAME, KEY);
  return(
    <ul className="w-full max-w-6xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center justify-center gap-6">
      {repositories.map((repository) => (
        <li key={repository.id}>
          <RepositoryCard 
            banner={repository.banner} 
            description={repository?.description}
            link={repository.html_url}
            name={repository.name}
            key={repository.id}
          />
        </li>
      ))}
    </ul>
  )
}