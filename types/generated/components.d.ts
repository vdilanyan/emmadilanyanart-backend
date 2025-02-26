import type { Schema, Struct } from '@strapi/strapi';

export interface VideosVideos extends Struct.ComponentSchema {
  collectionName: 'components_videos_videos';
  info: {
    description: 'component for adding YouTube video URLs';
    displayName: 'Videos';
    icon: 'play';
  };
  attributes: {
    youtube_video_id: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'videos.videos': VideosVideos;
    }
  }
}
