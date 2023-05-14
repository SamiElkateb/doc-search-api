# Doc Search API

## POC

```
Api(query) -> SearchResult[]
{
    searchEngineResults = SearchAdapter(query);
    searchResults = []
    foreach searchEngineResult:
        html = HTMLFetcher(searchEngineResult.url);
        markdown = MarkdownFormatter(html)
        searchResults.push({...searchEngineResult, content: markdown})

    return searchResults
}

SearchResult: {
  link
  websiteName
  pageTitle
  Content: markdown
}

SearchAdapter(query) -> SearchEngineResult[]
SearchEngineResult: {
  link
  websiteName
  pageTitle
}

HTMLFetcher(url) -> html

MarkdownFormatter(html, stylesheetName) -> markdown
```
