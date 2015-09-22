#' Datacomb
#'
#' An interface for viewing and combing through data frames.
#'
#' @example ./inst/examples/examples.R
#' @import htmlwidgets
#'
#' @export
Datacomb <- function(
  dataFrame, columns = colnames(dataFrame), rowLabel = NULL,
  width = '100%', height = '100%'
) {

  # try to be smart if row names are character
  #   and assume these will be rowLabel
  if(is.character(rownames(dataFrame)) && is.null(rowLabel)) {
    dataFrame = data.frame(
      name = rownames(dataFrame),
      dataFrame,
      check.names = FALSE,
      stringsAsFactors = FALSE
    )
    # use are opinionated name as rowLabel and exclude from columns
    if(!is.na(match("name",columns))){
      columns = columns[-match("name",columns)]
      rowLabel = "name"
    }
  }
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
    width = width,
    height = height,
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
