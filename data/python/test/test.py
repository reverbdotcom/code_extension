import unittest

from app.app import runner

class TestApp(unittest.TestCase):
    def test_url_counts(self):
        results = runner()
        self.assertEquals(results[0][0], '/orchestra')
        self.assertEquals(results[0][1], 1281)
