import { Document } from 'react-pdf';
import Resumepage from '../public/static/Hatim_Laajini_Dev.pdf'

const myComponent = () => {
  return (
    <Document
      file={Resumepage}
      onLoadSuccess={() => console.log('PDF loaded successfully')}
    >
    </Document>
  );
};

