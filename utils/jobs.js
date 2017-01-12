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

const readJobs = () => {
  return new Promise((resolve, reject) => {
    wx.getStorage({
      key: 'jobs',
      success: (storage) => {
        return resolve(JSON.parse(storage.data || '{}'));
      },
      fail: reject
    });
  });
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

export const getJobs = () => {
  return readJobs().then((jobs) => {
    return Object.values(jobs);
  });
};

export const updateJob = (id) => {
  return readJobs().then(jobs => {
    console.log(jobs)
    console.log(id)
    return jobs[id];
  });
};




