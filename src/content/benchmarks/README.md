# Publishing a benchmark

This folder is a scaffold: it holds zero entries today, and that's intentional - don't
add a benchmark here until a real result exists. Nothing in `README.md` is picked up as
an entry (the collection loader in `src/content.config.ts` explicitly excludes it).

## To publish one

1. Add a new file here, e.g. `yolo11-t4.md`, with frontmatter matching the schema in
   `src/content.config.ts`:

   ```md
   ---
   title: "YOLO11 object detection on NVIDIA T4"
   model: "YOLO11"
   gpu: "NVIDIA T4"
   cloudInstance: "AWS g4dn.xlarge"
   runtimes: ["PyTorch", "ONNX Runtime", "TensorRT"]
   precisions: ["FP32", "FP16", "INT8"]
   datePublished: "2026-12-01"
   summary: "One or two sentences - the real, measured result."
   draft: false
   ---

   Full write-up goes here, in Markdown.
   ```

2. Leave `draft: true` (or omit it - that's the schema default) until the result is
   final and reviewed. Draft entries render no page and are not listed anywhere.

3. Once `draft: false`, the page builds automatically at `/benchmarks/<filename-slug>`
   with Article + Dataset JSON-LD attached.

4. **Also update, by hand, every time you publish one:**
   - `src/pages/sitemap.xml.ts` - add the new `/benchmarks/<slug>` URL to the `routes` array.
   - `public/llms.txt` - add a line for it under `## Pages`.

   Neither of those is generated from the content collection, so a published benchmark
   that isn't added to both will build correctly but stay invisible to search engines,
   sitemaps and llms.txt readers.
