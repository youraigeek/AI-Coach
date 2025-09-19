import React from 'react';

const BlogPostPage = () => {
  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-to-br from-purple-50 to-yellow-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-montserrat font-bold text-4xl md:text-5xl text-purple-700 mb-8">
            Blog Post
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Individual blog post content will be displayed here.
          </p>
        </div>
      </section>
    </div>
  );
};

export default BlogPostPage;