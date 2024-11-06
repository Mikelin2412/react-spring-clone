const { Project } = require('../models/project.js');

class ProjectService {
  async getProjects(req, res) {
    try {
      const { search } = req.query;
      const projects = await Project.findAll();

      if (!search) {
        return res.send(projects);
      }

      const suitableProjects = projects.filter((project) =>
        project.title.toLowerCase().includes(search.toLowerCase()),
      );

      return res.send(suitableProjects);
    } catch (e) {
      return res.send({ errorMessage: e.message });
    }
  }
}

module.exports = new ProjectService();
