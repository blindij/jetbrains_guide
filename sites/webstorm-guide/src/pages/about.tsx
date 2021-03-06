import React from 'react';

import SiteLayout from 'gatsby-theme-bulmaio/src/components/layout/SiteLayout';

const AboutPage: React.FC = () => {

  return (
    <SiteLayout pageTitle={`About`}>
      <div className="content">
        <h1>About the WebStorm Guide</h1>
        <p>Our IDEs are powerful. What is the best way to learn how to harness that power?</p>
        <p>You can find useful information on <a href="https://twitter.com/WebStormIDE">Twitter</a> or our <a
          href="https://blog.jetbrains.com/webstorm/">product
          blog</a>. Plus, the <a href="https://www.jetbrains.com/help/webstorm/meet-webstorm.html">documentation</a> is
          always there to
          help. However, wouldn’t it be better if you had everything you needed to learn in one place?</p>
        <p>We have created the WebStorm Guide, a collection of bite-sized visual resources, organized to help spark your
          learning. We hope it helps you get into the flow and excel at what you do.</p>
        <h2>First: Why Use Tips</h2>
        <p>People don’t always have a lot of time to dedicate to learning. We decided to try a new format for the
          WebStorm Guide that wouldn’t require too much time to be effective and to help you get better at what you do.
          We’ve taken the tips we had on Twitter, expanded them with extra information, and added links to related
          resources – all to help you save time on learning.</p>
        <h2>Using the Guide</h2>
        <p>The WebStorm Guide comprises pieces of information organized into two categories: Topics and Technologies.
          Let’s take a look at each.</p>
        <h3>Category 1: Technologies</h3>
        <p>Let’s imagine that you’ve found a tip about WebStorm’s powerful React support and caught yourself thinking,
          “I didn’t know that, I wonder what other React productivity boosters I’ve missed?” If that sounds familiar,
          the Technologies section of the guide is what you are looking for. All the resources in it are organized into
          groups of specific technologies, such as popular frameworks, libraries, and the like.</p>
        <h3>Category 2: Topics</h3>
        <p>Sometimes you come across a useful tip on how to do a specific job in the IDE, such as how to add a
          conditional breakpoint when debugging, and you want to dive deeper into that topic. To help you do that, we’ve
          also grouped the resources by topic. Each topic has a brief explanation and a list of resources for that
          topic.</p>
        <h2>Sharing Feedback and Contributing</h2>
        <p>If you have any ideas about how to make this Guide better or want to share your feedback with us, feel free
          to fill out <a href="https://forms.gle/eenYd4sngtV4rQ3f7">this short survey</a>.</p>
        <p>The WebStorm Guide is also an open project, with <a href="https://github.com/JetBrains/jetbrains_guide">a
          repository in GitHub</a> that hosts all the content. We write
          all the content in Markdown and use GatsbyJS to render a static site. If you’d like to contribute to it,
          please refer to the <a
            href="https://github.com/JetBrains/jetbrains_guide/blob/master/README.md">README</a> for more information.
        </p>


      </div>
    </SiteLayout>
  );
};

export default AboutPage;
