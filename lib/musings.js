import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const musingsDirectory = path.join(process.cwd(), 'musings');

export function getSortedMusingsData() {
    // Get file names under /musings
    const fileNames = fs.readdirSync(musingsDirectory);
    const allMusingsData = fileNames.map(fileName => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, '');
    
        // Read markdown file as string
        const fullPath = path.join(musingsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
    
        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);
    
        // Combine the data with the id
        return {
        id,
        ...matterResult.data
        };
    });
    // Sort musings by date
    return allMusingsData.sort(({ date: a }, { date: b }) => {
        if (a < b) {
        return 1;
        } else {
        return -1;
        }
    });
}

export function getAllMusingIds() {
    const fileNames = fs.readdirSync(musingsDirectory);
    return fileNames.map(fileName => {
        return {
            params: {
                id: fileName.replace(/\.md$/, '')
            }
        };
    });
}

export async function getMusingData(id) {
    const fullPath = path.join(musingsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
    const contentHtml = processedContent.toString();

    // Combine the data with the id
    return {
        id,
        contentHtml,
        ...matterResult.data,
    };
}