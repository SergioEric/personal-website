import { mdToPdf } from 'md-to-pdf';
import * as path from 'node:path';

const files = ['en', 'es'];

(async () => {
  for (const lang of files) {
    try {
      const inputPath = path.resolve(__dirname, `../data/${lang}.md`);
      const outputPath = path.resolve(__dirname, `../data/${lang}.pdf`);

      console.log(`Converting ${lang}.md to PDF...`);

      await mdToPdf(
        { path: inputPath },
        {
          dest: outputPath,
          pdf_options: {
            format: 'A4',
            // margin: '20mm',
            printBackground: true,
          },
          stylesheet_encoding: 'utf-8',
        }
      );

      console.log(`Successfully created ${outputPath}`);
    } catch (error) {
      console.error(`Error converting ${lang}.md:`, error);
      process.exit(1);
    }
  }
})();
