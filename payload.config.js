import { buildConfig } from 'payload/config';
import ConfigEntrance from './collections/ConfigEntrance';
import ConfigTag from './collections/ConfigTag';
import Event from './collections/Event';
import Impresora from './collections/Impresora';
import Lectora from './collections/Lectora';
import Media from './collections/Media';
import PayloadUsers from './collections/PayloadUsers';
import Questionnaire from './collections/Questionnaire';

export default buildConfig({
  serverURL: 'http://localhost:5000',
  admin: {
    user: PayloadUsers.slug,
  },
  collections: [
    PayloadUsers,
    Impresora,
    Lectora,
    ConfigTag,
    Questionnaire,
    ConfigEntrance,
    Event,
    Media
  ],
  upload: {
    limits: {
      fileSize: 50000000
    }
  }
});
