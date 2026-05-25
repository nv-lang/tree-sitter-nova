-- Neovim tree-sitter configuration for Nova
--
-- Requirements:
--   - nvim-treesitter (https://github.com/nvim-treesitter/nvim-treesitter)
--
-- Usage: add this file to your Neovim config, e.g.:
--   ~/.config/nvim/after/plugin/nova.lua      (LazyVim / manual)
--   ~/.config/nvim/lua/plugins/nova.lua       (lazy.nvim plugin spec)
--
-- Then run:  :TSInstall nova

local parser_config = require("nvim-treesitter.parsers").get_parser_configs()

parser_config.nova = {
  install_info = {
    url = "https://github.com/nv-lang/tree-sitter-nova",
    files = { "src/parser.c" },
    branch = "main",
    generate_requires_npm = false,
    requires_generate_from_grammar = false,
  },
  filetype = "nova",
  maintainers = { "@nova-lang" },
}

-- Register .nv file extension
vim.filetype.add({
  extension = {
    nv = "nova",
  },
})

-- Optional: set comment string for Nova files
vim.api.nvim_create_autocmd("FileType", {
  pattern = "nova",
  callback = function()
    vim.bo.commentstring = "// %s"
    vim.bo.tabstop = 2
    vim.bo.shiftwidth = 2
    vim.bo.expandtab = true
  end,
})
