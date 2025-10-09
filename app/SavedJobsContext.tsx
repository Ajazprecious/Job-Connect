import React, { createContext, useContext, useState } from 'react';

export interface SavedJob {
  id: string | number;
  title: string;
  company: string;
  logo: string | null;
  category: string;
  location: string;
  date: string;
  description: string;
  url: string;
  job_type: string;
  source: string;
}

const SavedJobsContext = createContext<{
  savedJobs: SavedJob[];
  saveJob: (job: SavedJob) => void;
  removeJob: (id: string | number) => void;
}>({
  savedJobs: [],
  saveJob: () => {},
  removeJob: () => {},
});

export const useSavedJobs = () => useContext(SavedJobsContext);

export const SavedJobsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [savedJobs, setSavedJobs] = useState<SavedJob[]>([]);

  const saveJob = (job: SavedJob) => {
    setSavedJobs(prev =>
      prev.some(j => j.id === job.id) ? prev : [...prev, job]
    );
  };

  const removeJob = (id: string | number) => {
    setSavedJobs(prev => prev.filter(j => j.id !== id));
  };

  return (
    <SavedJobsContext.Provider value={{ savedJobs, saveJob, removeJob }}>
      {children}
    </SavedJobsContext.Provider>
  );
};

export default SavedJobsProvider;