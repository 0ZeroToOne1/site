'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import WithShimmer from './WithShimmer';

const files = {
  'project.rb': `class Project
  has_many :tasks, dependent: :destroy
  validates :name, presence: true
  before_save :normalize_name

  private

  def normalize_name
    self.name = name.strip.titleize
  end
end`,
  'projects_controller.rb': `class ProjectsController < ApplicationController
  def index
    @projects = Project.all
  end

  def show
    @project = Project.find(params[:id])
  end
end`,
  'index.html.erb': `<% @projects.each do |project| %>
  <div class="project">
    <%= project.name %>
  </div>
<% end %>`
};

const IDEMock = ({ loading = false }: { loading?: boolean }) => {
  const [activeFile, setActiveFile] = useState<keyof typeof files>('project.rb');

  return (
    <motion.div
      className="rounded-lg border border-gray-200 bg-black text-green-400 shadow-md font-mono text-sm w-full max-w-2xl overflow-hidden"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex border-b border-gray-700 bg-gray-900 text-white text-xs">
        {Object.keys(files).map((file) => (
          <button
            key={file}
            onClick={() => setActiveFile(file as keyof typeof files)}
            className={`px-4 py-2 transition-all border-b-2 ${activeFile === file ? 'border-blue-500 bg-gray-800' : 'border-transparent hover:bg-gray-800'}`}
          >
            {file}
          </button>
        ))}
      </div>
      <WithShimmer loading={loading}>
        <div className="relative p-4 whitespace-pre overflow-x-auto">
          <code>
            {files[activeFile]}
            <span className="animate-blink">█</span>
          </code>
        </div>
      </WithShimmer>
    </motion.div>
  );
};

export default IDEMock;