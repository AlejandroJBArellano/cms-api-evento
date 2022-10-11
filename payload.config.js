import { buildConfig } from 'payload/config';
import PayloadUsers from './collections/PayloadUsers';
import Impresora from './collections/Impresora';
import Lectora from './collections/Lectora';
import ConfigTag from './collections/ConfigTag';
import Questionnaire from './collections/Questionnaire';
import ConfigEntrance from './collections/ConfigEntrance';

export default buildConfig({
  serverURL: 'http://localhost:4000',
  admin: {
    user: PayloadUsers.slug,
  },
  collections: [
    PayloadUsers,
    Impresora,
    Lectora,
    ConfigTag,
    Questionnaire,
    ConfigEntrance
  ],
});
