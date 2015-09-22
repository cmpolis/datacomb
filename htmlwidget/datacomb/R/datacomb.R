#' Datacomb
#'
#' An interface for viewing and combing through data frames.
#'
#' @import htmlwidgets
#'
#' @export
Datacomb <- function(dataFrame, columns = c(), rowLabel = NULL, width = NULL, height = NULL) {
  
  # build object of config options
  opts = list(
    dataFrame = dataFrame,
    columns = columns,
    rowLabel = rowLabel
  )
  
  # create widget
  htmlwidgets::createWidget(
    name = 'datacomb',
    opts,
    width = '100%',
    height = '100%',
    package = 'datacomb'
  )
}

#' Widget output function for use in Shiny
#'
#' @export
DatacombOutput <- function(outputId, width = '100%', height = '400px'){
  shinyWidgetOutput(outputId, 'datacomb', width, height, package = 'datacomb')
}

#' Widget render function for use in Shiny
#'
#' @export
renderDatacomb <- function(expr, env = parent.frame(), quoted = FALSE) {
  if (!quoted) { expr <- substitute(expr) } # force quoted
  shinyRenderWidget(expr, DatacombOutput, env, quoted = TRUE)
}
