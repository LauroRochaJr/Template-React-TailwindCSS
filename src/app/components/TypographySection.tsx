import React from "react";

export function TypographySection() {
  return (
    <section id="typography" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Typography System
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive type scale for all your content needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
              Headings
            </h3>
            <div className="space-y-4">
              <div>
                <h1 className="text-gray-900 dark:text-white">Heading 1</h1>
                <code className="text-sm text-gray-500 dark:text-gray-400">
                  text-4xl / 36px
                </code>
              </div>
              <div>
                <h2 className="text-gray-900 dark:text-white">Heading 2</h2>
                <code className="text-sm text-gray-500 dark:text-gray-400">
                  text-3xl / 30px
                </code>
              </div>
              <div>
                <h3 className="text-gray-900 dark:text-white">Heading 3</h3>
                <code className="text-sm text-gray-500 dark:text-gray-400">
                  text-2xl / 24px
                </code>
              </div>
              <div>
                <h4 className="text-gray-900 dark:text-white">Heading 4</h4>
                <code className="text-sm text-gray-500 dark:text-gray-400">
                  text-xl / 20px
                </code>
              </div>
              <div>
                <h5 className="text-gray-900 dark:text-white">Heading 5</h5>
                <code className="text-sm text-gray-500 dark:text-gray-400">
                  text-lg / 18px
                </code>
              </div>
              <div>
                <h6 className="text-gray-900 dark:text-white">Heading 6</h6>
                <code className="text-sm text-gray-500 dark:text-gray-400">
                  text-base / 16px
                </code>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
              Font Weights
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-lg font-thin text-gray-900 dark:text-white">
                  Thin (100)
                </p>
                <code className="text-sm text-gray-500 dark:text-gray-400">
                  font-thin
                </code>
              </div>
              <div>
                <p className="text-lg font-extralight text-gray-900 dark:text-white">
                  Extra Light (200)
                </p>
                <code className="text-sm text-gray-500 dark:text-gray-400">
                  font-extralight
                </code>
              </div>
              <div>
                <p className="text-lg font-light text-gray-900 dark:text-white">
                  Light (300)
                </p>
                <code className="text-sm text-gray-500 dark:text-gray-400">
                  font-light
                </code>
              </div>
              <div>
                <p className="text-lg font-normal text-gray-900 dark:text-white">
                  Regular (400)
                </p>
                <code className="text-sm text-gray-500 dark:text-gray-400">
                  font-normal
                </code>
              </div>
              <div>
                <p className="text-lg font-medium text-gray-900 dark:text-white">
                  Medium (500)
                </p>
                <code className="text-sm text-gray-500 dark:text-gray-400">
                  font-medium
                </code>
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-900 dark:text-white">
                  Semibold (600)
                </p>
                <code className="text-sm text-gray-500 dark:text-gray-400">
                  font-semibold
                </code>
              </div>
              <div>
                <p className="text-lg font-bold text-gray-900 dark:text-white">
                  Bold (700)
                </p>
                <code className="text-sm text-gray-500 dark:text-gray-400">
                  font-bold
                </code>
              </div>
              <div>
                <p className="text-lg font-extrabold text-gray-900 dark:text-white">
                  Extra Bold (800)
                </p>
                <code className="text-sm text-gray-500 dark:text-gray-400">
                  font-extrabold
                </code>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
              Paragraphs & Text
            </h3>
            <div className="space-y-6">
              <div>
                <p className="text-lg text-gray-900 dark:text-white mb-2">
                  Large paragraph text for important content and lead
                  paragraphs.
                </p>
                <code className="text-sm text-gray-500 dark:text-gray-400">
                  text-lg
                </code>
              </div>
              <div>
                <p className="text-base text-gray-900 dark:text-white mb-2">
                  Base paragraph text for regular body content. This is the
                  default text size.
                </p>
                <code className="text-sm text-gray-500 dark:text-gray-400">
                  text-base
                </code>
              </div>
              <div>
                <p className="text-sm text-gray-900 dark:text-white mb-2">
                  Small text for secondary information and captions.
                </p>
                <code className="text-sm text-gray-500 dark:text-gray-400">
                  text-sm
                </code>
              </div>
              <div>
                <p className="text-xs text-gray-900 dark:text-white mb-2">
                  Extra small text for metadata and fine print.
                </p>
                <code className="text-sm text-gray-500 dark:text-gray-400">
                  text-xs
                </code>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
              Text Styles
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-base text-gray-900 dark:text-white">
                  Primary text color
                </p>
                <code className="text-sm text-gray-500 dark:text-gray-400">
                  text-gray-900 dark:text-white
                </code>
              </div>
              <div>
                <p className="text-base text-gray-600 dark:text-gray-300">
                  Secondary text color
                </p>
                <code className="text-sm text-gray-500 dark:text-gray-400">
                  text-gray-600 dark:text-gray-300
                </code>
              </div>
              <div>
                <p className="text-base text-gray-500 dark:text-gray-400">
                  Tertiary text color
                </p>
                <code className="text-sm text-gray-500 dark:text-gray-400">
                  text-gray-500 dark:text-gray-400
                </code>
              </div>
              <div>
                <p className="text-base text-blue-600 dark:text-blue-400">
                  Link text color
                </p>
                <code className="text-sm text-gray-500 dark:text-gray-400">
                  text-blue-600 dark:text-blue-400
                </code>
              </div>
              <div>
                <p className="text-base italic text-gray-900 dark:text-white">
                  Italic text style
                </p>
                <code className="text-sm text-gray-500 dark:text-gray-400">
                  italic
                </code>
              </div>
              <div>
                <p className="text-base underline text-gray-900 dark:text-white">
                  Underlined text
                </p>
                <code className="text-sm text-gray-500 dark:text-gray-400">
                  underline
                </code>
              </div>
              <div>
                <p className="text-base line-through text-gray-900 dark:text-white">
                  Strikethrough text
                </p>
                <code className="text-sm text-gray-500 dark:text-gray-400">
                  line-through
                </code>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 lg:col-span-2">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
              Code Examples
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Inline code:
                </p>
                <p className="text-gray-900 dark:text-white">
                  Use the{" "}
                  <code className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-pink-600 dark:text-pink-400 rounded text-sm font-mono">
                    className
                  </code>{" "}
                  prop to style components.
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Code block:
                </p>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                  <code className="text-sm font-mono">{`function Button({ children }) {
  return (
    <button className="px-4 py-2 bg-blue-600">
      {children}
    </button>
  );
}`}</code>
                </pre>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 lg:col-span-2">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
              Lists
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                  Unordered List
                </h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  <li>First list item</li>
                  <li>Second list item</li>
                  <li>Third list item</li>
                  <li>Fourth list item</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                  Ordered List
                </h4>
                <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  <li>First list item</li>
                  <li>Second list item</li>
                  <li>Third list item</li>
                  <li>Fourth list item</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
