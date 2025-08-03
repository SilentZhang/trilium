/**
 * A pseudo-MIME type which is used in the editor to automatically determine the language used in code blocks via heuristics.
 */
export const MIME_TYPE_AUTO = "text-x-trilium-auto";

export interface MimeTypeDefinition {
    default?: boolean;
    title: string;
    mime: string;
    /** The name of the language/mime type as defined by highlight.js (or one of the aliases), in order to be used for syntax highlighting such as inside code blocks. */
    mdLanguageCode?: string;
}

export interface MimeType extends MimeTypeDefinition {
    /**
     * True if this mime type was enabled by the user in the "Available MIME types in the dropdown" option in the Code Notes settings.
     */
    enabled: boolean;
}

/**
 * Given a MIME type in the usual format (e.g. `text/csrc`), it returns a MIME type that can be passed down to the CKEditor
 * code plugin.
 *
 * @param mimeType The MIME type to normalize, in the usual format (e.g. `text/c-src`).
 * @returns the normalized MIME type (e.g. `text-c-src`).
 */
export function normalizeMimeTypeForCKEditor(mimeType: string) {
    return mimeType.toLowerCase().replace(/[\W_]+/g, "-");
}

/**
 * For highlight.js-supported languages, see https://github.com/highlightjs/highlight.js/blob/main/SUPPORTED_LANGUAGES.md.
 */

export const MIME_TYPES_DICT: readonly MimeTypeDefinition[] = Object.freeze([
    { title: "Plain text", mime: "text/plain", mdLanguageCode: "plaintext", default: true },

    // Keep sorted alphabetically.
    { title: "APL", mime: "text/apl" },
    { title: "ASN.1", mime: "text/x-ttcn-asn" },
    { title: "ASP.NET", mime: "application/x-aspx" },
    { title: "Asterisk", mime: "text/x-asterisk" },
    { title: "Batch file (DOS)", mime: "application/x-bat", highlightJs: "dos" },
    { title: "Brainfuck", mime: "text/x-brainfuck", mdLanguageCode: "brainfuck" },
    { title: "C", mime: "text/x-csrc", mdLanguageCode: "c", default: true },
    { title: "C#", mime: "text/x-csharp", mdLanguageCode: "csharp", default: true },
    { title: "C++", mime: "text/x-c++src", mdLanguageCode: "cpp", default: true },
    { title: "Clojure", mime: "text/x-clojure", mdLanguageCode: "clojure" },
    { title: "ClojureScript", mime: "text/x-clojurescript" },
    { title: "Closure Stylesheets (GSS)", mime: "text/x-gss" },
    { title: "CMake", mime: "text/x-cmake", mdLanguageCode: "cmake" },
    { title: "Cobol", mime: "text/x-cobol" },
    { title: "CoffeeScript", mime: "text/coffeescript", mdLanguageCode: "coffeescript" },
    { title: "Common Lisp", mime: "text/x-common-lisp", mdLanguageCode: "lisp" },
    { title: "CQL", mime: "text/x-cassandra" },
    { title: "Crystal", mime: "text/x-crystal", mdLanguageCode: "crystal" },
    { title: "CSS", mime: "text/css", mdLanguageCode: "css", default: true },
    { title: "Cypher", mime: "application/x-cypher-query" },
    { title: "Cython", mime: "text/x-cython" },
    { title: "D", mime: "text/x-d", mdLanguageCode: "d" },
    { title: "Dart", mime: "application/dart", mdLanguageCode: "dart" },
    { title: "diff", mime: "text/x-diff", mdLanguageCode: "diff" },
    { title: "Django", mime: "text/x-django", mdLanguageCode: "django" },
    { title: "Dockerfile", mime: "text/x-dockerfile", mdLanguageCode: "dockerfile" },
    { title: "DTD", mime: "application/xml-dtd" },
    { title: "Dylan", mime: "text/x-dylan" },
    { title: "EBNF", mime: "text/x-ebnf", mdLanguageCode: "ebnf" },
    { title: "ECL", mime: "text/x-ecl" },
    { title: "edn", mime: "application/edn" },
    { title: "Eiffel", mime: "text/x-eiffel" },
    { title: "Elixir", mime: "text/x-elixir", mdLanguageCode: "elixir" },
    { title: "Elm", mime: "text/x-elm", mdLanguageCode: "elm" },
    { title: "Embedded Javascript", mime: "application/x-ejs" },
    { title: "Embedded Ruby", mime: "application/x-erb", mdLanguageCode: "erb" },
    { title: "Erlang", mime: "text/x-erlang", mdLanguageCode: "erlang" },
    { title: "Esper", mime: "text/x-esper" },
    { title: "F#", mime: "text/x-fsharp", mdLanguageCode: "fsharp" },
    { title: "Factor", mime: "text/x-factor" },
    { title: "FCL", mime: "text/x-fcl" },
    { title: "Forth", mime: "text/x-forth" },
    { title: "Fortran", mime: "text/x-fortran", mdLanguageCode: "fortran" },
    { title: "Gas", mime: "text/x-gas" },
    { title: "GDScript (Godot)", mime: "text/x-gdscript" },
    { title: "Gherkin", mime: "text/x-feature", mdLanguageCode: "gherkin" },
    { title: "GitHub Flavored Markdown", mime: "text/x-gfm", mdLanguageCode: "markdown" },
    { title: "Go", mime: "text/x-go", mdLanguageCode: "go", default: true },
    { title: "Groovy", mime: "text/x-groovy", mdLanguageCode: "groovy", default: true },
    { title: "HAML", mime: "text/x-haml", mdLanguageCode: "haml" },
    { title: "Haskell (Literate)", mime: "text/x-literate-haskell" },
    { title: "Haskell", mime: "text/x-haskell", mdLanguageCode: "haskell", default: true },
    { title: "Haxe", mime: "text/x-haxe", mdLanguageCode: "haxe" },
    { title: "HTML", mime: "text/html", mdLanguageCode: "xml", default: true },
    { title: "HTTP", mime: "message/http", mdLanguageCode: "http", default: true },
    { title: "HXML", mime: "text/x-hxml" },
    { title: "IDL", mime: "text/x-idl" },
    { title: "Java Server Pages", mime: "application/x-jsp", mdLanguageCode: "java" },
    { title: "Java", mime: "text/x-java", mdLanguageCode: "java", default: true },
    { title: "Jinja2", mime: "text/jinja2" },
    { title: "JS backend", mime: "application/javascript;env=backend", mdLanguageCode: "javascript", default: true },
    { title: "JS frontend", mime: "application/javascript;env=frontend", mdLanguageCode: "javascript", default: true },
    { title: "JSON-LD", mime: "application/ld+json", mdLanguageCode: "json" },
    { title: "JSON", mime: "application/json", mdLanguageCode: "json", default: true },
    { title: "JSX", mime: "text/jsx", mdLanguageCode: "javascript" },
    { title: "Julia", mime: "text/x-julia", mdLanguageCode: "julia" },
    { title: "Kotlin", mime: "text/x-kotlin", mdLanguageCode: "kotlin", default: true },
    { title: "LaTeX", mime: "text/x-latex", mdLanguageCode: "latex" },
    { title: "LESS", mime: "text/x-less", mdLanguageCode: "less" },
    { title: "LiveScript", mime: "text/x-livescript", mdLanguageCode: "livescript" },
    { title: "Lua", mime: "text/x-lua", mdLanguageCode: "lua" },
    { title: "MariaDB SQL", mime: "text/x-mariadb", mdLanguageCode: "sql" },
    { title: "Markdown", mime: "text/x-markdown", mdLanguageCode: "markdown", default: true },
    { title: "Mathematica", mime: "text/x-mathematica", mdLanguageCode: "mathematica" },
    { title: "mbox", mime: "application/mbox" },
    { title: "MIPS Assembler", mime: "text/x-asm-mips", mdLanguageCode: "mips" },
    { title: "mIRC", mime: "text/mirc" },
    { title: "Modelica", mime: "text/x-modelica" },
    { title: "MS SQL", mime: "text/x-mssql", mdLanguageCode: "sql" },
    { title: "mscgen", mime: "text/x-mscgen" },
    { title: "msgenny", mime: "text/x-msgenny" },
    { title: "MUMPS", mime: "text/x-mumps" },
    { title: "MySQL", mime: "text/x-mysql", mdLanguageCode: "sql" },
    { title: "Nix", mime: "text/x-nix", mdLanguageCode: "nix" },
    { title: "Nginx", mime: "text/x-nginx-conf", mdLanguageCode: "nginx" },
    { title: "NSIS", mime: "text/x-nsis", mdLanguageCode: "nsis" },
    { title: "NTriples", mime: "application/n-triples" },
    { title: "Objective-C", mime: "text/x-objectivec", mdLanguageCode: "objectivec" },
    { title: "OCaml", mime: "text/x-ocaml", mdLanguageCode: "ocaml" },
    { title: "Octave", mime: "text/x-octave" },
    { title: "Oz", mime: "text/x-oz" },
    { title: "Pascal", mime: "text/x-pascal", mdLanguageCode: "delphi" },
    { title: "PEG.js", mime: "null" },
    { title: "Perl", mime: "text/x-perl", default: true },
    { title: "PGP", mime: "application/pgp" },
    { title: "PHP", mime: "text/x-php", default: true },
    { title: "Pig", mime: "text/x-pig" },
    { title: "PLSQL", mime: "text/x-plsql", mdLanguageCode: "sql" },
    { title: "PostgreSQL", mime: "text/x-pgsql", mdLanguageCode: "pgsql" },
    { title: "PowerShell", mime: "application/x-powershell", mdLanguageCode: "powershell" },
    { title: "Properties files", mime: "text/x-properties", mdLanguageCode: "properties" },
    { title: "ProtoBuf", mime: "text/x-protobuf", mdLanguageCode: "protobuf" },
    { title: "Pug", mime: "text/x-pug" },
    { title: "Puppet", mime: "text/x-puppet", mdLanguageCode: "puppet" },
    { title: "Python", mime: "text/x-python", mdLanguageCode: "python", default: true },
    { title: "Q", mime: "text/x-q", mdLanguageCode: "q" },
    { title: "R", mime: "text/x-rsrc", mdLanguageCode: "r" },
    { title: "reStructuredText", mime: "text/x-rst" },
    { title: "RPM Changes", mime: "text/x-rpm-changes" },
    { title: "RPM Spec", mime: "text/x-rpm-spec" },
    { title: "Ruby", mime: "text/x-ruby", mdLanguageCode: "ruby", default: true },
    { title: "Rust", mime: "text/x-rustsrc", mdLanguageCode: "rust" },
    { title: "SAS", mime: "text/x-sas", mdLanguageCode: "sas" },
    { title: "Sass", mime: "text/x-sass" },
    { title: "Scala", mime: "text/x-scala" },
    { title: "Scheme", mime: "text/x-scheme" },
    { title: "SCSS", mime: "text/x-scss", mdLanguageCode: "scss" },
    { title: "Shell (bash)", mime: "text/x-sh", mdLanguageCode: "bash", default: true },
    { title: "Sieve", mime: "application/sieve" },
    { title: "Slim", mime: "text/x-slim" },
    { title: "Smalltalk", mime: "text/x-stsrc", mdLanguageCode: "smalltalk" },
    { title: "Smarty", mime: "text/x-smarty" },
    { title: "SML", mime: "text/x-sml", mdLanguageCode: "sml" },
    { title: "Solr", mime: "text/x-solr" },
    { title: "Soy", mime: "text/x-soy" },
    { title: "SPARQL", mime: "application/sparql-query" },
    { title: "Spreadsheet", mime: "text/x-spreadsheet" },
    { title: "SQL", mime: "text/x-sql", mdLanguageCode: "sql", default: true },
    { title: "SQLite (Trilium)", mime: "text/x-sqlite;schema=trilium", mdLanguageCode: "sql", default: true },
    { title: "SQLite", mime: "text/x-sqlite", mdLanguageCode: "sql" },
    { title: "Squirrel", mime: "text/x-squirrel" },
    { title: "sTeX", mime: "text/x-stex" },
    { title: "Stylus", mime: "text/x-styl", mdLanguageCode: "stylus" },
    { title: "Swift", mime: "text/x-swift", default: true },
    { title: "SystemVerilog", mime: "text/x-systemverilog" },
    { title: "Tcl", mime: "text/x-tcl", mdLanguageCode: "tcl" },
    { title: "Terraform (HCL)", mime: "text/x-hcl", highlightJs: "terraform" },
    { title: "Textile", mime: "text/x-textile" },
    { title: "TiddlyWiki ", mime: "text/x-tiddlywiki" },
    { title: "Tiki wiki", mime: "text/tiki" },
    { title: "TOML", mime: "text/x-toml", mdLanguageCode: "ini" },
    { title: "Tornado", mime: "text/x-tornado" },
    { title: "troff", mime: "text/troff" },
    { title: "TTCN_CFG", mime: "text/x-ttcn-cfg" },
    { title: "TTCN", mime: "text/x-ttcn" },
    { title: "Turtle", mime: "text/turtle" },
    { title: "Twig", mime: "text/x-twig", mdLanguageCode: "twig" },
    { title: "TypeScript-JSX", mime: "text/typescript-jsx" },
    { title: "TypeScript", mime: "application/typescript", mdLanguageCode: "typescript" },
    { title: "VB.NET", mime: "text/x-vb", mdLanguageCode: "vbnet" },
    { title: "VBScript", mime: "text/vbscript", mdLanguageCode: "vbscript" },
    { title: "Velocity", mime: "text/velocity" },
    { title: "Verilog", mime: "text/x-verilog", mdLanguageCode: "verilog" },
    { title: "VHDL", mime: "text/x-vhdl", mdLanguageCode: "vhdl" },
    { title: "Vue.js Component", mime: "text/x-vue" },
    { title: "Web IDL", mime: "text/x-webidl" },
    { title: "XML", mime: "text/xml", mdLanguageCode: "xml", default: true },
    { title: "XQuery", mime: "application/xquery", mdLanguageCode: "xquery" },
    { title: "xu", mime: "text/x-xu" },
    { title: "Yacas", mime: "text/x-yacas" },
    { title: "YAML", mime: "text/x-yaml", mdLanguageCode: "yaml", default: true },
    { title: "Z80", mime: "text/x-z80" }
]);

let byMarkdownNameMappings: Record<string, MimeTypeDefinition> | null = null;

/**
 * Given a Markdown language tag (e.g. `css`), it returns a corresponding {@link MimeTypeDefinition} if found.
 *
 * If there are multiple {@link MimeTypeDefinition}s for the language tag, then only the first one is retrieved. For example for `javascript`, the "JS frontend" mime type is returned.
 *
 * @param mdLanguageCode a language tag.
 * @returns the corresponding {@link MimeTypeDefinition} if found, or `undefined` otherwise.
 */
export function getMimeTypeFromMarkdownName(mdLanguageCode: string) {
    if (!byMarkdownNameMappings) {
        byMarkdownNameMappings = {};
        for (const mimeType of MIME_TYPES_DICT) {
            if (mimeType.mdLanguageCode && !byMarkdownNameMappings[mimeType.mdLanguageCode]) {
                byMarkdownNameMappings[mimeType.mdLanguageCode] = mimeType;
            }
        }
    }

    return byMarkdownNameMappings[mdLanguageCode];
}
