export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
  created_at: string;
  size: number;
  topics: string[];
  homepage: string | null;
  license: {
    key: string;
    name: string;
  } | null;
}

export interface Skill {
  name: string;
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}
