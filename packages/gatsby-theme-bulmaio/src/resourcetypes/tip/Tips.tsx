import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import ReferenceLayout from 'gatsby-theme-bulmaio/src/components/layout/ReferenceLayout';
import { ListedResourcesQuery } from 'gatsby-theme-bulmaio/src/resourcetypes';
import makeResources from 'gatsby-theme-bulmaio/src/resourcetypes/makeResource';

export const Tips: React.FC = () => {
  const { resources }: ListedResourcesQuery = useStaticQuery(
    graphql`
{
  resources: allResourcesByType(resourceType: "tip" ) {
    ...ListedResourceFragment
  }
}
`
  );
  return (
    <ReferenceLayout pageTitle="Tips" subtitle="Visual, standalone, bite-sized learning organized into different categories.">
      {{
        listing: (
          <div>
            {makeResources(resources)}
          </div>
        )
      }}
    </ReferenceLayout>
  );
};
