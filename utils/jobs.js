const writeJobs = (jobs) => {
  return new Promise((resolve, reject) => {
    wx.setStorage({
      key: 'jobs',
      data: JSON.stringify(jobs),
      success: resolve,
      fail: reject
    });
  })
};

export const createJob = (job) => {
  return readJobs().then(jobs => {
    const id = new Date().getTime();

    const newJobs = Object.assign({}, jobs, {
      [id]: Object.assign({}, job, { id }),
    });

    return writeJobs(newJobs);
  });
};

export const getJobById = (id) => {
  return readJobs().then(jobs => {
    return jobs[id];
  });
};

export const updateJob = (newJob) => {
  return readJobs().then(jobs => {
    const newJobs = Object.assign({}, jobs, { [newJob.id]: newJob });
    return writeJobs(newJobs);
  });
};

export const deleteJob = (id) => {
  return readJobs().then(jobs => {
    delete jobs[id];
    writeJobs(jobs);
    return Object.values(jobs);
  });
};


